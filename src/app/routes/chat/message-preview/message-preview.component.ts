import { DatePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from 'src/app/models/Message';

@Component({
  selector: 'app-message-preview',
  standalone: true,
  imports: [NgClass,DatePipe],
  templateUrl: './message-preview.component.html'
})
export class MessagePreviewComponent {
  @Input({required:true}) message?:Message;
  
  get isMessageMine():boolean {
    return this.message?.from == 1;
  }
}
