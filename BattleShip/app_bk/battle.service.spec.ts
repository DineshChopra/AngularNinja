// import { TestBed, inject } from '@angular/core/testing';

// import { BattleService } from './battle.service';
// import { BattleArea } from './battle-area/battle-area.model';
// import { Ship } from './battle-area/ship/ship.model';
// import { Util } from './util';

// describe('BattleService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [BattleService]
//     });
//   });

//   it('should ...', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//   }));
//   let battleSize = '5 E';
//   let shipListInput = ['Q 1 1 A1',
//                   'P 2 1 D4'];
//   let missileList = 'A1 B2 B2 B3';
  
//   it('should generate battle area', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let battleArea : BattleArea = service.generateBattleArea(battleSize, shipListInput, missileList);
//     expect(battleArea).toBeTruthy();
//   }));

//   it('should verify ship list', inject([BattleService], (service: BattleService) => {
//     let battleArea : BattleArea = service.generateBattleArea(battleSize, shipListInput, missileList);
//     let shipList = battleArea.getShipList();
//     expect(shipList.length).toEqual(shipListInput.length);
//     for(let ship of shipList){
//       expect(ship instanceof Ship).toBeTruthy();
//     }
//   }));

//   it('should verify player missile', inject([BattleService], (service: BattleService) => {
//     let battleArea : BattleArea = service.generateBattleArea(battleSize, shipListInput, missileList);
//     let missiles = battleArea.getPlayer().missileList;
//     let expectedMissileList = missileList.split(Util.SEPERATOR);
//     expect(missiles).toEqual(expectedMissileList);
//   }));  

//   it('should verify getShipInfo', inject([BattleService], (service: BattleService) => {
//     let shipInfoInputs = [
//       'Q 1 1 A1 B2',
//       'P 2 1 D4 C3'
//     ]
//     let shipInfos = service.getShipInfo(Util.INPUTS.battle_ships);
//     expect(shipInfos.length).toEqual(2);
//     let shipInfo1 = shipInfos[0];
//     expect(shipInfo1.length).toEqual(2);
//     expect(shipInfo1[0]).toEqual('Q 1 1 A1');
//     expect(shipInfo1[1]).toEqual('P 2 1 D4');
//     let shipInfo2 = shipInfos[1];
//     expect(shipInfo2.length).toEqual(2);
//     expect(shipInfo2[0]).toEqual('Q 1 1 B2');
//     expect(shipInfo2[1]).toEqual('P 2 1 C3');
//   }));

//   it('should verify Battle Area Generation process from Inputs', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let battleAreas = service.generateBattleAreaFromInputs();
//     expect(battleAreas.length).toEqual(2);
//     let ba1 = battleAreas[0];
//     let ba2 = battleAreas[1];
//     expect(ba1.getShipList().length).toEqual(2);
//     expect(ba2.getShipList().length).toEqual(2);
//     expect(ba1.getPlayer().missileList.length)
//             .toEqual(Util.INPUTS.missiles[0].split(Util.SEPERATOR).length);
//     expect(ba2.getPlayer().missileList.length)
//             .toEqual(Util.INPUTS.missiles[1].split(Util.SEPERATOR).length);
    
//   }));  
//   it('should verify missile hit the target', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     expect(service.isMissileHitTarget('A1')).toBeFalsy();
//     expect(service.isMissileHitTarget('B2')).toBeTruthy();
//     expect(service.isMissileHitTarget('B2')).toBeTruthy();
//     expect(service.isMissileHitTarget('B2')).toBeFalsy();
//     expect(service.isMissileHitTarget('C3')).toBeTruthy();
//     expect(service.isMissileHitTarget('C4')).toBeTruthy();
//     expect(service.isMissileHitTarget('C3')).toBeFalsy();
//     expect(service.isMissileHitTarget('C4')).toBeFalsy();
//   }));  
//   it('should verify change Player Active Status functionality', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let battleAreas = service.battleAreas;
//     expect(battleAreas[0].getPlayer().activeStatus).toBeTruthy();
//     expect(battleAreas[1].getPlayer().activeStatus).toBeFalsy();

//     service.changePlayerActiveStatus();
//     expect(battleAreas[1].getPlayer().activeStatus).toBeTruthy();
//     expect(battleAreas[0].getPlayer().activeStatus).toBeFalsy();

//     service.changePlayerActiveStatus();
//     expect(battleAreas[0].getPlayer().activeStatus).toBeTruthy();
//     expect(battleAreas[1].getPlayer().activeStatus).toBeFalsy();
//   }));
//   it('should check result when battle is running', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let player = service.battleAreas[0].getPlayer();
//     let result = service.checkResult(service.battleAreas[0]);
//     expect(result).toBeFalsy();
//   }));  
//   it('should check result when battle is finished', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let player = service.battleAreas[0].getPlayer();
//     for(let ship of service.battleAreas[1].getShipList()){
//       ship.activeCellList = [];
//     }
//     let result = service.checkResult(service.battleAreas[0]);
//     expect(result).toBeTruthy();
//   }));  
//   it('should change Enmy Battle Area', inject([BattleService], (service: BattleService) => {
//     expect(service.enmyBattleArea).toEqual(service.battleAreas[1]);
//     service.changeEnmyBattleArea();
//     expect(service.enmyBattleArea).toEqual(service.battleAreas[0]);
//     service.changeEnmyBattleArea();
//     expect(service.enmyBattleArea).toEqual(service.battleAreas[1]);
//   }));
//   it('should change turn', inject([BattleService], (service: BattleService) => {
//     service.changeTurn();
//     expect(service.battleAreas[1].getPlayer().activeStatus).toBeTruthy();
//     expect(service.battleAreas[0].getPlayer().activeStatus).toBeFalsy();
//     expect(service.enmyBattleArea).toEqual(service.battleAreas[0]);

//     service.changeTurn();
//     expect(service.battleAreas[0].getPlayer().activeStatus).toBeTruthy();
//     expect(service.battleAreas[1].getPlayer().activeStatus).toBeFalsy();
//     expect(service.enmyBattleArea).toEqual(service.battleAreas[1]);
//   }));
//   it('should verify launch missile functionality when no more missiles left', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let missileObj = {
//       player : 'Player-1',
//       missile : undefined
//     }
//     let launchStatus = service.launchMissile(missileObj);
//     expect(launchStatus).toEqual(undefined);
//   }));

//   it('should verify launch missile functionality, when missile hit target', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let missileObj = {
//       player : 'Player-1',
//       missile : 'A1'
//     }
//     let launchStatus = service.launchMissile(missileObj);
//     expect(launchStatus).toBeFalsy();
//   }));
//   it('should verify launch missile functionality, when missile miss target', inject([BattleService], (service: BattleService) => {
//     expect(service).toBeTruthy();
//     let missileObj = {
//       player : 'Player-1',
//       missile : 'B2'
//     }
//     let launchStatus = service.launchMissile(missileObj);
//     expect(launchStatus).toBeTruthy()
//   }));
// });
