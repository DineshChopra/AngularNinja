import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './header/hero.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { HeroService } from './header/hero.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs',      component: AboutusComponent },
  { path: 'contactUs',      component: ContactusComponent }

];

@NgModule({
  declarations: [
    AboutusComponent,
    AppComponent,
    ContactusComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
