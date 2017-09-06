import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroFormService } from '../hero-form.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-list-with-routing',
  templateUrl: './hero-list-with-routing.component.html',
  styleUrls: ['./hero-list-with-routing.component.css']
})
export class HeroListWithRoutingComponent implements OnInit {

  private heroList : Hero[];
  
  constructor(private service : HeroFormService,
              private router : Router) { }

  ngOnInit() {
    this.getHeroList();
  }
  private getHeroList(){
    this.service.getHeroes().subscribe(
      (response : any) => {
        this.heroList = response.json().data;
      },
      (error : any) => {

      },
      () => {
      }
    );
  }

  initHero(hero){
    let heroId;
    if(hero){
      heroId = hero.id;
    }else{
      heroId = 0;
    }
    this.router.navigate(['forms/heroTemplateFormWithRouting', heroId]);

  }
  onDeleteHeroEvent(heroId){
    this.service.deleteHero(heroId).subscribe(
      (response : any) => {
        this.heroList = response.json().data;
      }
    )
  }
}
