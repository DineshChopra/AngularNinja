import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hobbies, Hero } from '../model/hero';
import { Address } from '../model/address';
import { HeroFormService } from '../hero-form.service';
@Component({
  selector: 'app-hero-reactive-form',
  templateUrl: './hero-reactive-form.component.html'
})
export class HeroReactiveFormComponent implements OnInit, OnChanges {

  heroForm: FormGroup;
  hobbies;
  @Input() hero : Hero;
  @Output() saveHeroEvent = new EventEmitter<Hero>();
  @Output() cancelHeroEvent = new EventEmitter();
  buttonActionText : string;
  constructor(private fb: FormBuilder,
    private router: Router) {
    this.createForm();
  }
  
  ngOnInit() {
  }
  ngOnChanges(){
    this.setFormValues();
    this.buttonActionText = this.hero.id ? 'Edit' : 'Save';
  }
  private createForm(){
    this.heroForm = this.fb.group({
      name : ['', Validators.required],
      age : [''],
      hobby : ['', Validators.required]
    });
    this.hobbies = hobbies;
  }
  private setFormValues(){
    if(this.hero && this.heroForm){
      this.heroForm.setValue({
        name : this.hero.name || '',
        age : this.hero.age || '',
        hobby : this.hero.hobby || ''
      })
    }
  }
  onSubmit(){
    let hero : Hero = this.heroForm.value;
    hero.id = this.hero.id;
    this.saveHeroEvent.emit(hero);
  }
  onCancel(){
    this.cancelHeroEvent.emit();
  }
}
