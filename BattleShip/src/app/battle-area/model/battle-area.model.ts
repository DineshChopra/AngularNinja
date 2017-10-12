import { Ship } from './ship.model';
import { Util } from '../../util';
import { Player } from './player.model';
export class BattleArea{
    private height : string;
    private width = 0;
    private verticalCellValues : Array<string>;
    private shipList : Array<Ship> = [];
    private player : Player;
    public result;
    totalBAStrength = 0;
    
    constructor(battleAreaSize : string){
        this.width = Number(battleAreaSize.split(Util.SEPERATOR)[0]);
        this.height = battleAreaSize.split(Util.SEPERATOR)[1];
        this.updateVerticalCellValues();
    }
    /**
     * getVerticalCellValues is used to get verticalCellValues
     */
    public getVerticalCellValues(){
        return this.verticalCellValues;
    }

    /**
     * updateVerticalCellValues is used to update verticalCellValues
     * e.g height='E' =>  verticalCellValues = ['A', 'B', 'C', 'D', 'E']
     */
    private updateVerticalCellValues(){
        this.verticalCellValues = [];
        let height = Util.convertStringToAsciiNumber(this.height);
        for(let i=1; i <= height; i++){
            this.verticalCellValues.push(Util.convertAsciiNumberToString(i));
        }
    }
    public getHeight() : string{
        return this.height;
    }
    public getWidth() : number{
        return this.width;
    }
    public getShipList() : Array<Ship>{
        return this.shipList;
    }
    public setShipList(shipInfoList : Array<string>) : void{
        this.shipList = [];
        for(let shipInfo of shipInfoList){
           let ship = new Ship(shipInfo);
           this.shipList.push(ship);
           this.totalBAStrength += ship.totalShipStrength;
        }
    }
    public getPlayer() : Player{
        return this.player;
    }
    public setPlayer(Player) : void {
        this.player = Player
    }
}