import { DatePipe } from '@angular/common';
import { Component, Input, Signal, computed, inject } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { User } from 'src/app/models/User';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';

@Component({
  selector: 'app-conversation-preview',
  standalone: true,
  imports: [DatePipe, UserAvatarComponent],
  templateUrl: './conversation-preview.component.html'
})
export class ConversationPreviewComponent {
  private readonly messagesService = inject(MessagesService);
  @Input({required: true}) user?: User;

  readonly lastMessage: Signal<Message|undefined> = computed(() => {
    if (this.user) {
      const messagesOfUser = this.messagesService.messages().filter(message => message.from == this.user!.id);
      return messagesOfUser[messagesOfUser.length - 1];
    }
    return undefined;
  });
}
