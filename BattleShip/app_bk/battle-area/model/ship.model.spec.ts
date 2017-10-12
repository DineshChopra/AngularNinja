import { Ship, Cell } from './ship.model';
import { Util } from '../../util';

describe('Ship Model', ()=>{

    it('Should Create', ()=>{
     let ship = new Ship('Q 1 1 A1');
     expect(ship.shipType).toEqual(Util.SHIP_TYPE.STRONG);
     expect(ship.width).toEqual(1);
     expect(ship.height).toEqual(1);
     // verify active cell count
     expect(ship.cellList.length).toEqual(2);
     expect(ship.cellList[0].cellValue).toEqual('A1');
     expect(ship.cellList[0].strengh).toEqual(2);
     
     ship = new Ship('P 2 1 A1');
    })
})