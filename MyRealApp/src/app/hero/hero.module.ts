import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroActions } from './store/hero.actions';

const heroRoutes : Routes = [
  {path : '', component : HeroComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(heroRoutes)
  ],
  declarations: [HeroComponent, HeroDetailComponent],
  providers : [ HeroActions ]
  
})
export class HeroModule { }
