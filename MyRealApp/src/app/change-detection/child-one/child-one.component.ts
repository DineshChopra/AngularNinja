import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero/hero';
@Component({
  selector: 'app-child-one',
  template: `
    <p>
      child-one component has default change detection strategy. So change detection executes everytime when model value is changed
    </p>
    <h3>{{hero.name}}</h3>
  `,
  styles: []
})
export class ChildOneComponent implements OnInit {

  constructor() { }
  @Input() hero : Hero;
  ngOnInit() {
  }
}
