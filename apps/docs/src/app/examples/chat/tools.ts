import { Component } from '@angular/core';
import {
  NuiChat,
  type NuiChatChunk,
  NuiChatSession,
  type NuiChatTool,
  NuiChatToolTemplate,
} from '@needless-ui/angular/chat';
import { stream, wait } from './model';

interface Forecast {
  city: string;
  temperature: number;
  condition: string;
  high: number;
  low: number;
}

/** A pretend model that reasons, calls tools and cites its sources. */
async function* forecaster(question: string, signal: AbortSignal): AsyncGenerator<NuiChatChunk> {
  const city = /\b(lisbon|tokyo|zurich|nairobi)\b/i.exec(question)?.[1] ?? 'Lisbon';
  const name = city[0].toUpperCase() + city.slice(1).toLowerCase();
  const thought = `They want the weather in ${name}. I'll call the weather tool, then search for what to do there.`;
  for await (const text of stream(thought, signal)) yield { type: 'reasoning', text };

  const weather = { id: 'weather', name: 'weather', input: { city: name } };
  yield { type: 'tool', tool: { ...weather, state: 'running' } };
  await wait(1200, signal);
  const forecast: Forecast = { city: name, temperature: 21, condition: 'Sunny', high: 24, low: 15 };
  yield { type: 'tool', tool: { ...weather, state: 'done', output: forecast } };

  const search = { id: 'search', name: 'search', input: { query: `${name} outdoors` } };
  yield { type: 'tool', tool: { ...search, state: 'running' } };
  await wait(800, signal);
  yield { type: 'tool', tool: { ...search, state: 'done', output: { results: 2 } } };
  yield { type: 'source', source: { url: `https://en.wikipedia.org/wiki/${name}`, title: name } };
  yield { type: 'source', source: { url: 'https://www.wmo.int', title: 'World Weather' } };

  yield* stream(
    `It's **${forecast.temperature} °C and ${forecast.condition.toLowerCase()}** in ${name}, with a high of ${forecast.high} °C. A good day to be outside: walk the old town in the morning, and find a terrace for the evening.`,
    signal,
  );
}

@Component({
  selector: 'chat-tools-example',
  imports: [NuiChat, NuiChatToolTemplate],
  templateUrl: './tools.html',
  styleUrl: './tools.css',
})
export class ChatToolsExample {
  protected readonly chat = new NuiChatSession({
    respond: ({ messages, signal }) => forecaster(messages[messages.length - 1].text, signal),
  });

  protected forecast(tool: NuiChatTool): Forecast | undefined {
    return tool.output as Forecast | undefined;
  }

  protected city(tool: NuiChatTool): string {
    return (tool.input as { city: string }).city;
  }
}
