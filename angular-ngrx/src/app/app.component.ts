import { Component } from '@angular/core';
import { AppStateActions } from './state/app-state.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private actions : AppStateActions){

  }
  currentValue = 0;
  increment(){
    this.actions.increment(this.currentValue);
  }

  decrement(){
    this.actions.decrement(this.currentValue);
  }
}
