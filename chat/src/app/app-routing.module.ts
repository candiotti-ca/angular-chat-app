import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversationComponent } from './routes/chat/conversation/conversation.component';

const routes: Routes = [
  {path:'chat/:id', component: ConversationComponent},
  {path:'**', redirectTo:'chat/1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ConversationComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
