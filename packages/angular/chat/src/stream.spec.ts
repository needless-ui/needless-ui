import { nuiEventStream, nuiJsonStream, nuiTextStream } from './stream';

/** A body that arrives in these pieces. */
function body(...pieces: (string | Uint8Array)[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      for (const piece of pieces) {
        controller.enqueue(typeof piece === 'string' ? encoder.encode(piece) : piece);
      }
      controller.close();
    },
  });
}

async function all<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const out: T[] = [];
  for await (const value of iterable) out.push(value);
  return out;
}

describe('stream readers', () => {
  it('read text as it arrives, even a character split between pieces', async () => {
    const euro = new TextEncoder().encode('€');
    const pieces = await all(nuiTextStream(body('Price: ', euro.slice(0, 1), euro.slice(1), '5')));
    expect(pieces.join('')).toBe('Price: €5');
  });

  it('throw on a failed response, and read a good one', async () => {
    await expect(all(nuiTextStream(new Response('no', { status: 500 })))).rejects.toThrow('500');
    expect(await all(nuiTextStream(new Response('fine')))).toEqual(['fine']);
  });

  it('cancel the download when the reader stops early', async () => {
    let cancelled = false;
    const stream = new ReadableStream<Uint8Array>({
      pull(controller) {
        controller.enqueue(new TextEncoder().encode('more '));
      },
      cancel() {
        cancelled = true;
      },
    });
    for await (const _ of nuiTextStream(stream)) break;
    expect(cancelled).toBe(true);
  });

  it('read server-sent events by the standard’s rules', async () => {
    const events = await all(
      nuiEventStream(
        body(
          ': a comment\n',
          'data: one\n\n',
          'event: delta\ndata: line 1\ndata:line 2\nid: 7\n\n',
          'data: split\r',
          '\n\r\n',
          'retry: 1000\n\n',
          'data: never finished',
        ),
      ),
    );
    expect(events).toEqual([
      { event: 'message', data: 'one', id: '' },
      { event: 'delta', data: 'line 1\nline 2', id: '7' },
      { event: 'message', data: 'split', id: '7' },
    ]);
  });

  it('read JSON lines, with or without a last line break', async () => {
    const values = await all(nuiJsonStream(body('{"a":1}\n{"a"', ':2}\n\n{"a":3}')));
    expect(values).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  });
});
