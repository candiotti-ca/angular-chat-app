import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private readonly usersService = inject(UsersService);
  readonly messages: WritableSignal<Message[]> = signal([]);

  sendMessageToUser(content:string, userId: number):void{
    const from = this.usersService.loggedInUser().id;

    this.messages.mutate(list => list.push({
      content,
      from,
      to:userId,
      date: new Date(),
      read: false
    }));
  }

  static getConversation(messages:Message[], from:number, to:number):Message[]{
    return messages.filter(message => 
      (message.from == from && message.to == to)
      || (message.to == from && message.from == to)
    );
  }
}
