import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreComponent } from './store/store.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ageValidatorDirective } from './shared/age-validator.directive';
import { FightComponent } from './fight/fight.component';
import { TimerComponent } from './timer/timer.component';
import { CharacterComponent } from './character/character/character.component';
import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    UserProfileComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    UserListComponent,
    ageValidatorDirective,
    FightComponent,
    TimerComponent,
    CharacterComponent,
    HomeComponent,
    ArchiveComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
