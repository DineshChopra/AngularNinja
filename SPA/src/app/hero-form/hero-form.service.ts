import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from './model/hero';
@Injectable()
export class HeroFormService {

  private heroUrl = 'http://localhost:3010/api/hero';
  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.options = new RequestOptions({ headers: this.headers });
  }
  getHeroes(){
    return this.http.get(this.heroUrl);
  }
  
  saveHero(hero : Hero) : Observable<any>{
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(hero);
    return this.http.post(this.heroUrl, body, {headers : headers})
  }
  deleteHero(heroId){
    const url = this.heroUrl + "/" + heroId
    return this.http.delete(url, this.options)
  }

  getHero(heroId) : Observable<any>{
    console.log('heroid ::::::::::::: ', heroId);
    const url = this.heroUrl + "/" + heroId;
    return this.http.get(url);
  }
}
