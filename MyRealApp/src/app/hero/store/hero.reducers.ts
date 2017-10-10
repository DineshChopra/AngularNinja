import * as HeroListActions from './hero.actions';
import { Hero } from '../hero';
const heroes : Hero[] = [
];
const initialState = {
    heroes : heroes,
    editHero :  null
}

export function heroListReducer(state = initialState, action : HeroListActions.HeroListActions ){
    switch (action.type) {
        case HeroListActions.ADD_HERO:
            return {    
                heroes : [...state.heroes, action.payload]
            }
        case HeroListActions.GET_HEROES:
            return {    
                heroes : action.payload
            }
        default:
            return state;
    }
}