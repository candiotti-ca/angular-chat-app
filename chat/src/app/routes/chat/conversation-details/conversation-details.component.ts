import { UsersService } from './../../../services/users/users.service';
import { NgFor } from '@angular/common';
import { Component, Input, OnChanges, Signal, SimpleChanges, WritableSignal, computed, inject, signal } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { User } from 'src/app/models/User';
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
export class ConversationDetailsComponent implements OnChanges {
  private readonly usersService = inject(UsersService);
  private readonly messagesService = inject(MessagesService);
  @Input({required:true, alias: 'recipient'}) _recipient?: User;

  readonly recipient: WritableSignal<User> = signal({} as any);

  readonly messages: Signal<Message[]> = computed(() => {
    const expeditor = this.usersService.loggedInUser();
    const recipient = this.recipient();

    return MessagesService.getConversation(this.messagesService.messages(), expeditor.id, recipient.id);
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.recipient.set(changes['_recipient'].currentValue);
  }
}
