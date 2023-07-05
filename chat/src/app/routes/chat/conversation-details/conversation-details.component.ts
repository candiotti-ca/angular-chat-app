import { NgFor } from '@angular/common';
import { Component, Input, Signal, computed, inject } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { MessagePreviewComponent } from '../message-preview/message-preview.component';

@Component({
  selector: 'app-conversation-details',
  standalone: true,
  imports: [
    NgFor,
    ChatHeaderComponent,
    MessagePreviewComponent,
    MessageInputComponent
  ],
  templateUrl: './conversation-details.component.html'
})
export class ConversationDetailsComponent {
  private readonly messagesService = inject(MessagesService);
  @Input({required:true}) recipientId?: number;//fixme input pas mis a jour, ou alors pas ecoute par le header et la conversation

  readonly messages: Signal<Message[]> = computed(() => {
    const tmp = this.recipientId;
    if (tmp) {
      return this.messagesService.getMessagesOfUser(tmp)();//fixme
    }
    
    return [];
  });
}
