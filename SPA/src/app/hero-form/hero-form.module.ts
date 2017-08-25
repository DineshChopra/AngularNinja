import { CommonModule } from '@angular/common';
import { NgModule }             from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroTemplateFormComponent } from './template-driven-form/hero-template-form.component';
import { HeroFormService } from './hero-form.service';
import { HeroReactiveFormComponent } from './reactive-form/hero-reactive-form.component';
import { HeroFormComponent } from './hero-form.component';

const userFormRoutes: Routes = [
  { path: '', component: HeroFormComponent,
    children : [
      { path: '', redirectTo: 'reactive', pathMatch: 'full' },
      { path: 'template', component: HeroTemplateFormComponent },
      { path: 'reactive', component: HeroReactiveFormComponent },
      { path: 'dynamic', component: HeroTemplateFormComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(userFormRoutes)
  ],
  declarations: [
    HeroFormComponent,
    HeroTemplateFormComponent,
    HeroReactiveFormComponent,
  ],
  exports: [
    RouterModule
  ],
  providers : [
    HeroFormService
  ],
  bootstrap : [HeroFormComponent]
})
export class HeroFormModule { }