import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BattleAreaComponent } from './battle-area/battle-area.component';
import { BattleService } from './battle.service';
import { NumberToArrayPipe } from './number-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BattleAreaComponent,
    NumberToArrayPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BattleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
