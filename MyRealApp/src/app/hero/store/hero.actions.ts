import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

export const GET_HEROES = 'GET_HEROES';
export const ADD_HERO = 'ADD_HERO';
export const EDIT_HERO = 'EDIT_HERO';

export class AddHero implements Action{
    readonly type = ADD_HERO;
    payload : Hero;
}
export class EditHero implements Action{
    readonly type = EDIT_HERO;
    payload : Hero;
}
export class GetHeroes implements Action{
    readonly type = GET_HEROES;
    payload : Hero;
}

export type HeroListActions = GetHeroes | AddHero;

@Injectable()
export class HeroActions{
    constructor(private heroService : HeroService, private store : Store<{heroList : {heroes : Hero[]}}>){}
    getHeroes(){
        this.heroService.getHeroes().subscribe(
            (heroes : Hero[]) => {
                this.store.dispatch({type : GET_HEROES, payload : heroes});
            }
        );
    }
    
    addHero(hero : Hero){
        this.heroService.addHero(hero).subscribe(
            (heroes : Hero[]) => {
                this.store.dispatch({type : GET_HEROES, payload : heroes});
            }
        )
    }
}