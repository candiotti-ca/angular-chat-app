import { DatePipe } from '@angular/common';
import { Component, Input, Signal, computed, inject } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { User } from 'src/app/models/User';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';
import { UsersService } from './../../../services/users/users.service';

@Component({
  selector: 'app-conversation-preview',
  standalone: true,
  imports: [DatePipe, UserAvatarComponent],
  templateUrl: './conversation-preview.component.html'
})
export class ConversationPreviewComponent {
  private readonly usersService = inject(UsersService);
  private readonly messagesService = inject(MessagesService);
  @Input({required: true}) recipient?: User;

  readonly lastMessage: Signal<Message|undefined> = computed(() => {
    const expeditor = this.usersService.loggedInUser();
    
    if (this.recipient) {
      const conversation = MessagesService.getConversation(this.messagesService.messages(), expeditor.id, this.recipient.id);
      return conversation.sort((msgA, msgB) => msgB.date.getTime() - msgA.date.getTime())[0];
    }

    return undefined;
  });
}
