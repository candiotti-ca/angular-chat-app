import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ConversationComponent } from '../conversation/conversation.component';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-header.component.html'
})
export class ChatHeaderComponent {
  readonly chat = inject(ConversationComponent);
}
