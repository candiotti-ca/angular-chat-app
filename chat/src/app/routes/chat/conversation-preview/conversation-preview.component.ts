import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-conversation-preview',
  standalone: true,
  imports: [],
  templateUrl: './conversation-preview.component.html'
})
export class ConversationPreviewComponent {
  @Input({required: true}) user?: User;
}
