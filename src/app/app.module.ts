import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WelcomPipe } from './welcom.pipe';
import { LimitwordsPipe } from './limitwords.pipe';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    ContactusComponent,
    WelcomPipe,
    LimitwordsPipe,
    TemplateformComponent,
    ReactiveformComponent
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
export class AppModule { 
  constructor() {
    console.log('App Module loads');
  }
}
