import { Component, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import {BankService } from './bank.service';
import * as fromBankReducer from './store/bank.reducers';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit, OnChanges {

  constructor(private bankService : BankService, private store : Store<any>) { }
  banks;
  ngOnInit() {
    this.bankService.getBanks().subscribe(
      (banks) => {
        this.store.dispatch({
          type : fromBankReducer.BANK_LIST,
          payload : banks
        })
      }
    );

    this.store.select('bankReducer').subscribe(
      data => {
        console.log('--- Bank data received from store ------------', data);
        this.banks = data;
      }
    )
  }

  ngOnChanges(){
    console.log('BankComponent ngOnChanges is called ');
  }

}
