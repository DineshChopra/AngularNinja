import { Action } from '@ngrx/store';
export const BANK_LIST = 'BANK_LIST';
export class GetBanks implements Action{
    readonly type = BANK_LIST;
    payload : any[];
}

const initialState = [];

export function bankReducer(state = initialState, action : GetBanks ){
    switch (action.type) {
        case BANK_LIST:
            return action.payload;
        default:
            return state;
    }
}