import { Util, SHIP_TYPE, SHIP_STRENGTH_MAP } from '../../util';
export class Ship {
    // Q 1 1 A1
    shipType: string;
    width: number;
    height: number;
    shipStartPoint: string;
    cellList : Array<Cell>;
    totalShipStrength :number= 0;
    
    constructor(shipInfo: string) {
        this.setShipInfo(shipInfo);
        this.updateCellList();
    }

    private setShipInfo(shipInfo: string) {
        let shipInfos = shipInfo.split(Util.SEPERATOR);
        this.shipType = shipInfos[0];
        this.width = Number(shipInfos[1]);
        this.height = Number(shipInfos[2]);
        this.shipStartPoint = shipInfos[3];
    }
    private updateCellList(){
        this.cellList = new Array<Cell>();
        let strength = (SHIP_TYPE.STRONG === this.shipType)  ? 
                        SHIP_STRENGTH_MAP[SHIP_TYPE.STRONG] : 
                        SHIP_STRENGTH_MAP[SHIP_TYPE.WEEK];
        let rowValue = Util.convertStringToAsciiNumber(this.shipStartPoint.charAt(0));
        let colValue = Number(this.shipStartPoint.charAt(1));
        console.log(`rowValue : ${rowValue}, colValue : ${colValue}`);
        let cellValue;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                cellValue = Util.getCellValue(rowValue + i, colValue + j);
                this.cellList.push(new Cell(cellValue, strength));
                this.totalShipStrength += strength;
            }
        }
    }

    
}
export class Cell {
    constructor(public cellValue, public strength : number) { }
}
