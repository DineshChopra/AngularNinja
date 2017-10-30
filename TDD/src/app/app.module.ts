import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './component-with-dependency/welcome.component';
import { TwainComponent } from './shared/twain/twain.component'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TwainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [ WelcomeComponent ]
})
export class AppModule { }
