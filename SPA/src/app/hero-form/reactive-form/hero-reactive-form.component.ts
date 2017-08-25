import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { hobbies, Hero } from '../model/hero';
import { Address } from '../model/address';
@Component({
  selector: 'app-hero-reactive-form',
  templateUrl: './hero-reactive-form.component.html',
  styleUrls: ['./hero-reactive-form.component.css']
})
export class HeroReactiveFormComponent implements OnInit {

  heroForm: FormGroup;
  hobbies;
  hero : Hero;
  constructor(private fb: FormBuilder) { 
    this.hero = new Hero(1,'Ram', 10, 'Cricket');
    this.hero.addresses = new Address();
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.heroForm = this.fb.group({
      name : [this.hero.name, Validators.required],
      hobby : [this.hero.hobby, Validators.required],
      address : this.fb.group({
        city : '',
        state : ''
      })
    });
    this.hobbies = hobbies;
  }
  onSubmit(){
    this.hero = this.heroForm.value;
    console.log(this.hero);
  }

}
