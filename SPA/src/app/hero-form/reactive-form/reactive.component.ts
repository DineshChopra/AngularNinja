import { Component, OnInit } from '@angular/core';

import { HeroFormService } from '../hero-form.service';
import { Hero } from '../model/hero';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {

  private heroList : Hero[];
  private selectedHero : Hero;
  constructor(private service : HeroFormService) { }

  ngOnInit() {
    this.getHeroList();
  }
  private getHeroList(){
    this.service.getHeroes().subscribe(
      (response : any) => {
        this.heroList = response.json().data;
      }
    );
  }
  initHero(hero){
    if(hero){
      this.selectedHero = hero;
    }else{
      this.selectedHero = new Hero();
    }
  }

  onSaveHero(hero){
    console.log('save hero object -- ', hero);
    this.service.saveHero(hero).subscribe(
      (response : any) => {
       this.heroList = response.json().data;
       this.selectedHero = undefined;
      }
    );
  }
  onCancelHeroEvent(){
    this.selectedHero = undefined;
  }
  onDeleteHeroEvent(heroId){
    this.service.deleteHero(heroId).subscribe(
      (response : any) => {
        this.heroList = response.json().data;
        console.log('Hero deleted successfully ---------- ', this.heroList);
      }
    )
  }
}
