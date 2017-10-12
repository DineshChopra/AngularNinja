import { Util } from '../../util';
export class Player{
    private static count = 0;
    public name : string;
    public missileList : Array<string>;
    public activeStatus : boolean = false;
    constructor(missileList : string){
        this.name = `Player-${++Player.count}`;
        this.missileList = missileList.split(Util.SEPERATOR);
    }
}