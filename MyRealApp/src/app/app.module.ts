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
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ChildOneComponent } from './change-detection/child-one/child-one.component';
import { ChildTwoComponent } from './change-detection/child-two/child-two.component';

const appRoutes : Routes = [
  {path : '', redirectTo : 'hero', pathMatch : 'full'},
  {path : "bank", loadChildren : 'app/bank/bank.module#BankModule'},
  {path : "hero", loadChildren : 'app/hero/hero.module#HeroModule'},
  {path : "aboutus", loadChildren : 'app/aboutus/aboutus.module#AboutusModule'},
  {path : "changeDetection", component : ChangeDetectionComponent},
]

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChangeDetectionComponent,
    ChildOneComponent,
    ChildTwoComponent
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
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      })
  ],
  providers : [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
