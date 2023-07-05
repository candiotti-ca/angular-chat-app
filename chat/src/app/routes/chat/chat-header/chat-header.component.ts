import { Component, computed, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ConversationDetailsComponent } from '../conversation-details/conversation-details.component';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  templateUrl: './chat-header.component.html'
})
export class ChatHeaderComponent {
  private readonly conversationDetails = inject(ConversationDetailsComponent);
  private readonly usersService = inject(UsersService);

  recipientUser = computed(() => this.usersService.recipients().find(user => user.id == this.conversationDetails.recipientId));
}
