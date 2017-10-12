import { Injectable, EventEmitter } from '@angular/core';
import { BattleArea } from './battle-area/battle-area.model';
import { Player } from './battle-area/player/player.model';
import { Util } from './util';
@Injectable()
export class BattleService {
  battleAreas : Array<BattleArea>;
  enmyBattleArea : BattleArea;
  public resultEvent = new EventEmitter<string>();
  constructor() {
    this.battleAreas = this.generateBattleAreaFromInputs();
    this.enmyBattleArea = this.battleAreas[1];
   }

  generateBattleArea(battleSize, shipList, missileList){
    let battleArea = new BattleArea(battleSize);
    battleArea.setShipList(shipList);
    let player : Player = new Player(missileList);
    battleArea.setPlayer(player);
    return battleArea;
  }

  generateBattleAreaFromInputs() : Array<BattleArea>{
    let battleSize = Util.INPUTS.battle_area_size;
    let shipInfos = this.getShipInfo(Util.INPUTS.battle_ships);
    let missiles = Util.INPUTS.missiles;

    let ba1 = this.generateBattleArea(battleSize, shipInfos[0], missiles[0]);
    // defult ba1 is active
    ba1.getPlayer().activeStatus = true;
    let ba2 = this.generateBattleArea(battleSize, shipInfos[1], missiles[1]);
    let battleAreas : Array<BattleArea> = [] ;
    battleAreas.push(ba1);
    battleAreas.push(ba2);
    return battleAreas;
  }
  getShipInfo(shipInfos: Array<string>) {
    let shipList1 : Array<String> = [];
    let shipList2 : Array<String> = [];
    for (let shipInfo of shipInfos) {
      let shipElements = shipInfo.split(Util.SEPERATOR);
      let shipType = shipElements[0];
      let shipWidth = shipElements[1];
      let shipHeight = shipElements[2];
      let placeInfo1 = shipElements[3];
      let placeInfo2 = shipElements[4];

      shipList1.push([shipType, shipWidth, shipHeight, placeInfo1].join(Util.SEPERATOR));
      shipList2.push([shipType, shipWidth, shipHeight, placeInfo2].join(Util.SEPERATOR));
    }
    let ships = [shipList1, shipList2]
    return ships;
  }
  checkResult(player){
    let shipList = this.enmyBattleArea.getShipList();
    for(let ship of shipList){
      // if(ship.activeCellList.length > 0){
      //   return false;
      // }
    }
    let result = `${player} won the battle`;
    this.logs.push(result);
    this.battleAreas[0].result = this.battleAreas[1].result = result;
    this.resultEvent.emit(result);
    return true;
  }
  isMissileHitTarget(missile) : boolean{
    let shipList = this.enmyBattleArea.getShipList();
    if(shipList){
      for(let ship of shipList){
        // let missileIndex = ship.activeCellList.indexOf(missile);
        // if(missileIndex >= 0){
        //   ship.activeCellList.splice(missileIndex, 1);
        //   return true;
        // }
      }
    }
    return false;
  }
  changeEnmyBattleArea(){
    for(let battleArea of this.battleAreas){
        if(battleArea != this.enmyBattleArea){
          this.enmyBattleArea = battleArea;
          return true;
        }
      }
  }
  changePlayerActiveStatus(){
    if(this.battleAreas[0].getPlayer().activeStatus){
      this.battleAreas[0].getPlayer().activeStatus = false;
      this.battleAreas[1].getPlayer().activeStatus = true;
      
    }else{
      this.battleAreas[0].getPlayer().activeStatus = true;
      this.battleAreas[1].getPlayer().activeStatus = false;
    }
  }
  changeTurn(){
    this.changePlayerActiveStatus();
    this.changeEnmyBattleArea();
  }
  logs : Array<string> = [];
  
  launchMissile(missileObj) : boolean{
    let missile = missileObj.missile;
    if(!missile){
      this.logs.push(`${missileObj.player} has no more missiles left to launch`);
      this.changeTurn();
      return;
    }
    let launchStatus : boolean;
    if(this.isMissileHitTarget(missile)){
      this.logs.push(`${missileObj.player} fires a missile with target ${missile} which got hit`);
      launchStatus = true;
    }else{
      this.logs.push(`${missileObj.player} fires a missile with target ${missile} which got miss`);
      launchStatus = false;
      this.changeTurn();
    }
    this.checkResult(missileObj.player);
    return launchStatus;
  }
}
