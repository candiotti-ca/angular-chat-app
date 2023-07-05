import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages/messages.service';
import { ConversationComponent } from '../conversation/conversation.component';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
  readonly chat = inject(ConversationComponent);
  private readonly messagesService = inject(MessagesService);
  text?:string;

  @HostListener('window:keydown.enter')
  sendMessage():void{
    if (this.text) {
      this.messagesService.sendMessage(this.text, this.chat.id);
    }

    this.text = undefined;
  }
}
