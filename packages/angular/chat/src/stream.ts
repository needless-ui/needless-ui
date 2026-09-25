/**
 * Readers for the ways a server streams a reply, to return from `respond`:
 * plain text, server-sent events, and JSON lines. Each takes a `fetch` response
 * (a failed one throws) or its body, and cancels the download when the reply is
 * stopped.
 */

/** One server-sent event. */
export interface NuiServerEvent {
  /** The `event:` field, or `message`. */
  readonly event: string;
  /** The `data:` lines, joined by newlines. */
  readonly data: string;
  /** The last `id:` the stream sent. */
  readonly id: string;
}

type Source = Response | ReadableStream<Uint8Array>;

/** The response's text, piece by piece as it arrives. */
export async function* nuiTextStream(source: Source): AsyncGenerator<string> {
  if ('ok' in source && !source.ok) {
    throw new Error(`The server answered ${source.status} ${source.statusText}`.trim());
  }
  const body = 'getReader' in source ? source : source.body;
  if (!body) return;
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let done = false;
  try {
    while (true) {
      const result = await reader.read();
      done = result.done;
      // Characters split between pieces wait for their other half.
      const text = decoder.decode(result.value, { stream: !done });
      if (text) yield text;
      if (done) return;
    }
  } finally {
    if (!done) reader.cancel().catch(() => {});
  }
}

/** The response's lines, without their line breaks: `\n`, `\r\n` or `\r`. */
async function* lines(source: Source): AsyncGenerator<string> {
  let buffer = '';
  for await (const text of nuiTextStream(source)) {
    buffer += text;
    // A `\r` at the end may be the first half of a `\r\n`: wait for the next piece.
    const end = buffer.endsWith('\r') ? buffer.length - 1 : buffer.length;
    const complete = buffer.slice(0, end).split(/\r\n|\r|\n/);
    buffer = complete.pop()! + buffer.slice(end);
    yield* complete;
  }
  // A last `\r` ends a line, maybe an empty one; text after the last break is a line too.
  if (buffer.endsWith('\r')) yield buffer.slice(0, -1);
  else if (buffer) yield buffer;
}

/**
 * The events of a `text/event-stream` response, as most model APIs stream, read by
 * the HTML standard's rules. An event the stream ends in the middle of is dropped.
 *
 * ```ts
 * for await (const { data } of nuiEventStream(response)) {
 *   if (data === '[DONE]') return;
 *   yield JSON.parse(data).choices[0].delta.content ?? '';
 * }
 * ```
 */
export async function* nuiEventStream(source: Source): AsyncGenerator<NuiServerEvent> {
  let data: string[] = [];
  let event = '';
  let id = '';
  for await (const line of lines(source)) {
    if (line === '') {
      if (data.length) yield { event: event || 'message', data: data.join('\n'), id };
      data = [];
      event = '';
      continue;
    }
    if (line.startsWith(':')) continue;
    const colon = line.indexOf(':');
    const field = colon < 0 ? line : line.slice(0, colon);
    let value = colon < 0 ? '' : line.slice(colon + 1);
    if (value.startsWith(' ')) value = value.slice(1);
    if (field === 'data') data.push(value);
    else if (field === 'event') event = value;
    else if (field === 'id' && !value.includes('\0')) id = value;
  }
}

/** The values of a newline-delimited JSON response (NDJSON), as Ollama streams. */
export async function* nuiJsonStream<T = unknown>(source: Source): AsyncGenerator<T> {
  for await (const line of lines(source)) {
    if (line.trim()) yield JSON.parse(line) as T;
  }
}
