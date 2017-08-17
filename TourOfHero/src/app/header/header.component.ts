import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-list';
import { HeroService } from './hero.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Header component';
  hero = 'Ram';
  heroObj : Hero = {
        id : 1, 
        name : 'Sham'
    };
  

  heroes = HEROES;
  constructor(private heroService : HeroService) { 

    heroService.display();
    heroService.getHeroes();
  }

  ngOnInit() {
    this.title = 'Updated Title'
  }
  selectedHero : Hero;
  onSelect(hero : Hero){
    this.selectedHero = hero;
  }

  onClickEvent($event){
    console.log($event);
  }
}
