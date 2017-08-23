import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hero } from './hero';
@Injectable()
export class HeroFormService {

  constructor(private http : Http) { }
  private heroUrl = 'localhost:3010/api/hero';
  getHeroes(){
    return this.http.get(this.heroUrl);
  }

  saveHero(hero : Hero){
    return this.http.put(this.heroUrl, hero);
  }

}
