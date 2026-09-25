import { Component } from '@angular/core';
import { NuiChat, NuiChatSession } from '@needless-ui/angular/chat';
import { reply, stream } from './model';

@Component({
  selector: 'chat-assistant-example',
  imports: [NuiChat],
  templateUrl: './assistant.html',
  styleUrl: './assistant.css',
})
export class ChatAssistantExample {
  protected readonly chat = new NuiChatSession({
    respond: ({ messages, signal }) => {
      const { text, attachments = [] } = messages[messages.length - 1];
      return stream(
        reply(
          text,
          attachments.map((file) => file.name),
        ),
        signal,
      );
    },
  });

  protected readonly suggestions = [
    'Plan a weekend in Lisbon',
    'Write a haiku about CSS',
    'What is a signal in Angular?',
  ];
}
