import { Store, Action } from '@ngrx/store';
// import { ActionTypes } from '../shared/constant';

export const counterReducer = (state: number=0, action: Action) =>{
    switch(action.type){
        case "increment":
        return state + 1;

        case "decrement":
        return state - 1;

        default:
        return state;
    }
}