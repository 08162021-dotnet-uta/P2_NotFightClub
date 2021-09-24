import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
<<<<<<< Updated upstream

const routes: Routes = [
  {
    path: 'my-profile',
    component: UserProfileComponent
  }
=======
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './guards/auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'test1', component: TestComponent, canActivate:[AuthGuard]},
  { path: 'chat', component: ChatComponent },
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent}
>>>>>>> Stashed changes
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
