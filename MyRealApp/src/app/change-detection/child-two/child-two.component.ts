import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../hero/hero';
@Component({
  selector: 'app-child-two',
  template: `
    <p>
    child-one component has OnPush change detection strategy. So change detection executes only when model reference is changed
    </p>
    <h3>{{hero.name}}</h3>
    <input [(ngModel)]="hero.name">
  `,
  styles: [],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent implements OnInit {

  constructor() { }
  @Input() hero : Hero;
  ngOnInit() {
  }

}
