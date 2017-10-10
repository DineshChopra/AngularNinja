import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  constructor() { }
  hero : Hero;
  ngOnInit() {
    this.hero = new Hero();
    this.hero.name = 'Misko Hevery';
  }

  updateHeroProperty(){
    this.hero.name = 'Brad Green';
  }
  
  updateHeroReference(){
    this.hero = new Hero();
    this.hero.name = 'Dinesh Chopra';
  }

}
