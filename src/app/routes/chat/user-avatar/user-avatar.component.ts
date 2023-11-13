import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  templateUrl: './user-avatar.component.html'
})
export class UserAvatarComponent implements OnInit{
  @Input({required: true}) user?: User;
  firstLetter?:string;

  ngOnInit(): void {
    this.firstLetter=this.user!.name.at(0)?.toUpperCase();
  }
}
