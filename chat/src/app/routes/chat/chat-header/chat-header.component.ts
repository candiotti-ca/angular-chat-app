import { Component, inject } from '@angular/core';
import { ConversationDetailsComponent } from '../conversation-details/conversation-details.component';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports:[UserAvatarComponent],
  templateUrl: './chat-header.component.html'
})
export class ChatHeaderComponent {
  readonly conversationDetails = inject(ConversationDetailsComponent);
}
