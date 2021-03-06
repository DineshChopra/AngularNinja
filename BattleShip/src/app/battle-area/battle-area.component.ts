import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BattleArea } from './model/battle-area.model';
import { Util } from '../util';
import { Ship } from './model/ship.model';

@Component({
  selector: 'bs-battle-area',
  templateUrl: './battle-area.component.html',
  styleUrls: ['./battle-area.component.sass']
})
export class BattleAreaComponent implements OnInit {

  constructor() { }
  @Input() battleArea : BattleArea;
  @Output() launchMissileEvent = new EventEmitter();
  private activeMissiles : Array<string>;
  ngOnInit() {
    this.activeMissiles = this.battleArea.getPlayer().missileList;
  }
  

  isShipExist(rowValue, colValue){
    let cellValue = rowValue+colValue;
    for(let ship of this.battleArea.getShipList()){
      for(let cell of ship.cellList){
        if(cell.cellValue === cellValue){
          // return `ship${ship.shipType}`;
          return `strength${cell.strength}`;
        }
      }
    }
  }
  launchMissile(){
    let missile = this.activeMissiles.shift();
    let missileObj = {
      'missile' : missile,
      'player'  : this.battleArea.getPlayer().name
    }
    this.launchMissileEvent.emit(missileObj);
  }
  getActionClass(){
    if(this.battleArea.getPlayer().activeStatus){
      return "btn-success active";
    }else{
      return "btn-danger disabled";
    }
  }
  getShipType(rowValue, colValue){
    let cellValue = rowValue+colValue;
    for(let ship of this.battleArea.getShipList()){
      for(let cell of ship.cellList){
        if(cell.cellValue === cellValue){
          return ship;
        }
      }
    }
  }

}
