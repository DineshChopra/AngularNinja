import { Component, OnInit } from '@angular/core';
import { BattleService } from './battle.service'; 
import { BattleArea } from './battle-area/battle-area.model';
import { Util } from './util';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Battle Ship';
  private battleAreas : Array<BattleArea>;
  private logs : Array<string>;
  private battleResult : string;
  constructor(private battleService : BattleService){
  }

  ngOnInit(){
    this.battleAreas = this.battleService.battleAreas;
    this.logs = this.battleService.logs;

    this.battleService.resultEvent.subscribe(
      (result) => {this.battleResult = result;}
    )
  }

  onLaunchMissile(missileObj){
    this.battleService.launchMissile(missileObj);
  }

  logClass(log){
    if(log.indexOf('hit') > -1){
      return 'list-group-item-success';
    } else {
      return 'list-group-item-danger';
    }
  }

}
