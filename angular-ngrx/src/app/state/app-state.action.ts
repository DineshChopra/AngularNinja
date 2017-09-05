import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

export const appStateAction = {
    'increment' : 'increment',
    'decrement' : 'decrement'
}

@Injectable()
export class AppStateActions {
    constructor(
        private store: Store<any>,
    ) { }

    public increment(stateChanges): void {
        console.log('increment action is called ', stateChanges);
        this.store.dispatch(
            {
                type: appStateAction.increment,
                payload: stateChanges
            }
        );
    }
    public decrement(stateChanges): void {
        console.log('DEcrement action is called ', stateChanges);
        this.store.dispatch(
            {
                type: appStateAction.decrement,
                payload: stateChanges
            }
        );
    }
}