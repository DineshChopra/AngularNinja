import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutusComponent } from './aboutus.component';

const aboutusRoutes : Routes = [
  {path : '', component : AboutusComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutusRoutes)
  ],
  declarations: [AboutusComponent]
})
export class AboutusModule { }
