import { Injectable, Signal, computed, signal } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly users: Signal<User[]> = signal([
    {id:1, name:'Robert'},
    {id:2, name:'Simone'},
    {id:3, name:'Jean-Paul'},
    {id:4, name:'Mireille'},
    {id:5, name:'Pierre'},
    {id:6, name:'Martha'},
    {id:7, name:'Lionel'},
    {id:8, name:'Ginette'},
    {id:9, name:'Marc'}
  ]);

  loggedInUser:Signal<User> = computed(() => this.users().find(user => user.id == 1)!);
  recipients:Signal<User[]> = computed(() => this.users().filter(user => user.id != 1));
}
