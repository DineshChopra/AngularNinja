import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HeroService {

  constructor(private http : Http) { }
  display(){
    console.log('Hero service is called ----------');
  }

  getHeroes(){
    this.http.get('localhost:8080/heroes');
  }

}
