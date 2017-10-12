// import { inject } from '@angular/core/testing';
import { Player } from './player.model';

describe('Player', () => {

    it('Generate Player and test its name', () => {
        const player1 = new Player('A1 B2 B2 B3');
        expect(player1).toBeTruthy();
        expect(player1.name).toEqual('Player-1');
        expect(player1.missileList).toEqual(['A1', 'B2', 'B2', 'B3']);
        
        const player2 = new Player('A1 B2 B3 A1 D1 E1 D4 D4 D5 D5');
        expect(player2).toBeTruthy();
        expect(player2.name).toEqual('Player-2');
        expect(player2.missileList).toEqual(['A1', 'B2', 'B3', 'A1', 'D1', 'E1', 'D4', 'D4', 'D5', 'D5']);
    });
})