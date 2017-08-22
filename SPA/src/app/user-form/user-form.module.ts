import { CommonModule } from '@angular/common';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroTemplateFormComponent } from './template-driven-form/hero-template-form.component';

const userFormRoutes: Routes = [
    { path: '', component: HeroTemplateFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userFormRoutes)
  ],
  declarations: [
    HeroTemplateFormComponent
  ],
  exports: [
    RouterModule
  ]
})
export class UserFormModule { }