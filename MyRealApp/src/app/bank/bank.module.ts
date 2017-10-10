import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BankComponent } from './bank.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { bankReducer } from './store/bank.reducers';
import { BankService } from './bank.service';
import { BankServiceInterceptor } from './bank.service.interceptor';

const bankRoutes: Routes = [
  { path: '', component: BankComponent }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(bankRoutes),
    StoreModule.forFeature('bankReducer', bankReducer)
  ],
  declarations: [BankComponent],
  providers: [
    BankService,
    { provide: HTTP_INTERCEPTORS, useClass: BankServiceInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: BankServiceInterceptor, multi: true }  // if more than one interceptor
  ]
})
export class BankModule { }
