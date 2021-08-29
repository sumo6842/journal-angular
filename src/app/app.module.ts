import { InputFormatDirective } from './input-format.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightDirective } from './highlight.directive';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { NewFormGroupComponent } from './new-form-group/new-form-group.component';
import { PasswordComponent } from './password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    HighlightDirective,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    ContactComponent,
    CourseComponent,
    SignupComponent,
    RegisterComponent,
    NewFormGroupComponent,
    PasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
