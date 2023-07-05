import { NgFor } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Message } from 'src/app/models/Message';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { MessagePreviewComponent } from '../message-preview/message-preview.component';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
    ChatHeaderComponent,
    MessagePreviewComponent,
    MessageInputComponent
  ],
  templateUrl: './conversation.component.html'
})
export class ConversationComponent {
  private readonly messagesService = inject(MessagesService);

  @Input() id!: number;

  readonly messages: Message[] = this.messagesService.messages();
}
