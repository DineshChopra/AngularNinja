import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HeroFormService } from '../hero-form.service';
import { Hero } from '../model/hero';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @Input() heroList : Hero[];
  @Output() heroAddEditEvent = new EventEmitter();
  @Output() deleteHeroEvent = new EventEmitter();
  private selectedHero : Hero;
  constructor(private service : HeroFormService) { }

  ngOnInit() {
  }
  gotoAddEditHero(hero? : Hero){
    console.log('Add Edit hero is clicked', hero);
    this.heroAddEditEvent.emit(hero);
  }
  gotoDeleteHero(heroId){
    this.deleteHeroEvent.emit(heroId);
  }

}
