import { NgFor, NgIf } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { ConversationDetailsComponent } from './conversation-details/conversation-details.component';
import { ConversationPreviewComponent } from './conversation-preview/conversation-preview.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgFor,NgIf, ConversationPreviewComponent, ConversationDetailsComponent],
  templateUrl: './chat.component.html'
})
export class ChatComponent {
  private readonly usersService = inject(UsersService);
  readonly recipients = this.usersService.recipients();
  selectedRecipientId: WritableSignal<number | undefined> = signal(undefined);

  newConversation():void{//todo cca essayer call http to signal

  }

  selectConversation(userId:number):void{
    this.selectedRecipientId.set(userId);
    console.log('selected', this.selectedRecipientId())//fixme
  }
}
