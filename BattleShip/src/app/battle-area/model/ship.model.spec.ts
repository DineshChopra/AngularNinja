import { Ship, Cell } from './ship.model';
import { Util, SHIP_TYPE, SHIP_STRENGTH_MAP } from '../../util';

describe('Ship Model', ()=>{

    it('Should Create', ()=>{
     let ship = new Ship('Q 1 1 A1');
     let shipType = ship.shipType;
     expect(ship.shipType).toEqual(SHIP_TYPE.STRONG);
     expect(ship.width).toEqual(1);
     expect(ship.height).toEqual(1);
     // verify active cell count
     expect(ship.cellList.length).toEqual(1);
     expect(ship.cellList[0].cellValue).toEqual('A1');
     expect(ship.cellList[0].strength).toEqual(SHIP_STRENGTH_MAP[shipType]);
     let totalShipStrength = SHIP_STRENGTH_MAP[shipType] * ship.cellList.length;
     expect(ship.totalShipStrength).toEqual(totalShipStrength);
     
     ship = new Ship('P 2 1 A1');
     shipType = ship.shipType;
     expect(ship.shipType).toEqual(SHIP_TYPE.WEEK);
     expect(ship.width).toEqual(2);
     expect(ship.height).toEqual(1);
     // verify active cell count
     expect(ship.cellList.length).toEqual(2);
     expect(ship.cellList[0].cellValue).toEqual('A1');
     expect(ship.cellList[0].strength).toEqual(SHIP_STRENGTH_MAP[shipType]);
     expect(ship.cellList[1].cellValue).toEqual('A2');
     expect(ship.cellList[1].strength).toEqual(SHIP_STRENGTH_MAP[shipType]);
     totalShipStrength = SHIP_STRENGTH_MAP[shipType] * ship.cellList.length;
     expect(ship.totalShipStrength).toEqual(totalShipStrength);
    })
})