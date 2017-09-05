import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule  } from '@angular/router';

import { CartComponent } from './cart.component';

const cartRoutes: Routes = [
    { path: '', component: CartComponent, pathMatch: 'full' }
];
@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ],
  providers: []
})
export class CartModule { }
