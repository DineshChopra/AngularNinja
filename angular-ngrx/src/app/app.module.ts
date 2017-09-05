import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Store, StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { AppStateActions } from './state/app-state.action';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({counterReducer})
  ],
  providers: [
    AppStateActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
