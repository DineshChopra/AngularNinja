import { Component, OnInit } from '@angular/core';

import { Hero } from '../model/hero';
import { HeroFormService } from '../hero-form.service';
import { hobbies } from '../model/hero';
@Component({
  selector: 'app-hero-template-form',
  templateUrl: './hero-template-form.component.html',
  styleUrls: ['./hero-template-form.component.css']
})
export class HeroTemplateFormComponent implements OnInit {

  constructor(private heroFormService : HeroFormService) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(){
    this.heroFormService.getHeroes()
      .subscribe(
        (response : any) => {
          let heroes = response.json().data;
          console.log('heroes list', heroes);
        }
      );
   }
  
  hobbies = hobbies;

  model : Hero = new Hero();

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.heroFormService.saveHero(this.model)
      .subscribe(
        (response : any) => {
          console.log('Data saved successfully');
        }
      )
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
