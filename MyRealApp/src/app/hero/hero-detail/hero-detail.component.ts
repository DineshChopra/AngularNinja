import { Component, OnInit, OnChanges, OnDestroy,  Input } from '@angular/core';

@Component({
  selector: 'tr[app-hero-detail]',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges, OnDestroy {

  constructor() {
    console.log('Constructor app-hero-detail is initialized ---------');
   }

  ngOnInit() {
    console.log('Hero-detail oninit is called ');
  }
  ngOnChanges() {
    console.log('---------Hero-detail ngOnChanges is called ');
  }
  ngOnDestroy() {
    console.log('---------Hero-detail ngOnDestroy-ngOnDestroy is called ');
  }

  @Input() hero;

  get id(){
    return this.hero.id;
  }
  get name(){
    return this.hero.name;
  }
  get age(){
    return this.hero.age;
  }
  get hobby(){
    return this.hero.hobby;
  }
}
