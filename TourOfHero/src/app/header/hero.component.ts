import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { HEROES } from './hero-list';

@Component({
  selector: 'app-hero',
  template: `
  <li>
    <span class="badge">{{hero.id}}</span> {{hero.name}} -- {{name}}
  </li>
  <h1 (click)="onHeaderClick()">{{name}}</h1>
  `,
})
export class HeroComponent {
  @Input() hero;
  @Input() name;
  @Output() clickEvent = new EventEmitter();

  onHeaderClick(){
      this.clickEvent.emit(this.name);
  }
}
