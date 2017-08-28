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
import { HeroListComponent } from './hero-list/hero-list.component';
import { ReactiveComponent } from './reactive-form/reactive.component';
import { HeroDynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicComponent } from './dynamic-form/dynamic.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';
import { QuestionService } from './dynamic-form/question.service';
import { QuestionControlService } from './dynamic-form/question-control.service';

const userFormRoutes: Routes = [
  { path: '', component: HeroFormComponent,
    children : [
      { path: '', redirectTo: 'hero', pathMatch: 'full' },
      { path: 'template', component: HeroTemplateFormComponent },
      { path: 'reactive', component: ReactiveComponent },
      { path: 'dynamic', component: DynamicComponent },
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
    DynamicComponent,
    DynamicFormQuestionComponent,
    HeroFormComponent,
    HeroTemplateFormComponent,
    HeroReactiveFormComponent,
    HeroListComponent,
    ReactiveComponent,
    HeroDynamicFormComponent,
  ],
  exports: [
    RouterModule
  ],
  providers : [
    HeroFormService,
    QuestionService,
    QuestionControlService
  ],
  bootstrap : [HeroFormComponent]
})
export class HeroFormModule { }