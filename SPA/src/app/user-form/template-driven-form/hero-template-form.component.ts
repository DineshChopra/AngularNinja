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
  
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model : Hero = new Hero(1, 'Mr. ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
