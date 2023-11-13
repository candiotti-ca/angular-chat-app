import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ChatComponent } from './routes/chat/chat.component';

const routes: Routes = [
  {path:'chat', component: ChatComponent},
  {path:'**', redirectTo:'chat'}
];

@NgModule({
  imports: [ChatComponent],
  providers:[provideRouter(routes, withComponentInputBinding())],
  exports: [RouterModule]
})
export class AppRoutingModule { }
