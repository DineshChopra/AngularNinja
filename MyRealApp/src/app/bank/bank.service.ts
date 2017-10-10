import { Injectable } from '@angular/core';

// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { ResponseDTO } from '../core/model/response-dto';
import { Bank } from './model';
@Injectable()
export class BankService {

  constructor(private httpClient : HttpClient) { }
  private bankUrl = 'http://localhost:3010/api/bank';
  getBanks(){
    return this.httpClient.get<ResponseDTO<Bank[]>>(this.bankUrl).map(
      res => res.data
    );
  }
}
