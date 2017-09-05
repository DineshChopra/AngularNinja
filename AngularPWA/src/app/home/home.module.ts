import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: []
})
export class HomeModule { }
