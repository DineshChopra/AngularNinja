import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { HeaderComponent } from './header/header.component';
import { HeroService } from './hero/service/hero.service';
import { heroListReducer } from './hero/store/hero.reducers';

// i18n internationalization
import { HttpClient } from '@angular/common/http';
import { ChildOneComponent } from './change-detection/child-one/child-one.component';
import { ChildTwoComponent } from './change-detection/child-two/child-two.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes : Routes = [
  {path : '', redirectTo : 'hero', pathMatch : 'full'},
  {path : "bank", loadChildren : 'app/bank/bank.module#BankModule', 
    canActivate : [AuthGuardService]},
  {path : "hero", loadChildren : 'app/hero/hero.module#HeroModule'},
  {path : "aboutus", loadChildren : 'app/aboutus/aboutus.module#AboutusModule'},
  {path : "changeDetection", component : ChangeDetectionComponent},
  {path : "cricket", loadChildren : 'app/cricket/cricket.module#CricketModule'},
  {path : "signup", component : SignupComponent},
  {path : "signin", component : SigninComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChangeDetectionComponent,
    ChildOneComponent,
    ChildTwoComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      heroList : heroListReducer,
    }),
    // RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules}),
  ],
  providers : [ HeroService, 
                AuthService,
                AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
