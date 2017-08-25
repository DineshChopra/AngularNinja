import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from './model/hero';
@Injectable()
export class HeroFormService {

  constructor(private http : Http) { }
  private heroUrl = 'http://localhost:3010/api/hero';
  getHeroes(){
    return this.http.get(this.heroUrl);
  }
  
  saveHero(hero : Hero) : any{
    
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(hero);
    return this.http.post(this.heroUrl, body, {headers : headers})
  }
}
