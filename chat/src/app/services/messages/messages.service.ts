import { Injectable, WritableSignal, signal } from '@angular/core';
import { Message } from 'src/app/models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: WritableSignal<Message[]> = signal([]);

  sendMessage(content:string, to: number):void{
    const from = Math.random() > .5 ? 2 : 1;

    this.messages.mutate(list => list.push({
      content,
      from,
      to,
      date: new Date()
    }));
  }
}
