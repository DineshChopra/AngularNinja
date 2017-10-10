import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../hero';

@Injectable()
export class HeroService {

  constructor(private http : Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  private heroUrl = 'http://localhost:3010/api/hero';
  private headers: Headers;
  private options: RequestOptions;
  public heroCountEvent = new EventEmitter();

  getHeroes() : Observable<Hero[]>{
    return this.http.get(this.heroUrl).map(
      res => res.json().data
    );
  }
  
  addHero(hero : Hero) : Observable<Hero[]>{
    const body = JSON.stringify(hero);
    return this.http.post(this.heroUrl, body, { headers: this.headers }).map(
      res => res.json().data
    );
  }

  updateHeroCount(heroCount){
    this.heroCountEvent.emit(heroCount);
  }
}
