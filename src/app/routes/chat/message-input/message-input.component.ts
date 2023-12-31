import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { ConversationDetailsComponent } from '../conversation-details/conversation-details.component';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
  readonly conversationDetails = inject(ConversationDetailsComponent);
  private readonly messagesService = inject(MessagesService);
  text?:string;

  @HostListener('window:keydown.enter')
  sendMessage():void{
    if (this.text) {
      this.messagesService.sendMessageToUser(this.text, this.conversationDetails.recipient().id);
    }

    this.text = undefined;
  }
}
