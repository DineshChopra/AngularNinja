import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes : Routes  = [
  {path : 'home' , loadChildren : 'app/home/home.module#HomeModule'},
  {path : 'cart' , loadChildren : 'app/cart/cart.module#CartModule'},
  {path : '' , redirectTo : 'home', pathMatch : 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
