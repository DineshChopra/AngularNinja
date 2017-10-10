import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from './hero'
import { HeroService } from './service/hero.service';
import { HeroActions } from './store/hero.actions';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnChanges {

  constructor(private heroActions : HeroActions, private store : Store<{heroList : {heroes : Hero[]}}>) { }

  ngOnInit() {
    this.heroActions.getHeroes();
    
    this.store.select('heroList').subscribe(
      (data) => {this.heroes = data.heroes;}
    );
  }
  ngOnChanges(){
    console.log('HeroComponent ngOnChanges is called ');
  }
  heroes : Hero[];


  addHero(){
    this.heroActions.addHero(this.hero);
    this.hero = new Hero();
  }
  hero : Hero = new Hero();
  heroName = '';
  trackHero(index, hero) {
    // console.log(hero);
    return hero ? hero.id : undefined;
  }

}
