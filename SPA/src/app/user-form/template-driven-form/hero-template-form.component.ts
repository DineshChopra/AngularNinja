import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
@Component({
  selector: 'app-hero-template-form',
  templateUrl: './hero-template-form.component.html',
  styleUrls: ['./hero-template-form.component.css']
})
export class HeroTemplateFormComponent implements OnInit {

  constructor() { }
  ngOnInit() { }
  
  hobbies = ['Cricket', 'Football',
    'Hockey', 'BasketBall'];

  model : Hero = new Hero(1, 'Mr. ', 10, this.hobbies[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
