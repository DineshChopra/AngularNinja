import { Util } from '../../util';
export class Ship {
    // Q 1 1 A1
    public shipType: string;
    public width: number;
    public height: number;
    private shipStartPoint: string;
    public cellList: Array<Cell> = [];
    
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
    /**
     * updateCellList is used to update cell list of ship.
     * Each cell contains the information if hIndex - horizontal position and colValue - vertical position
     * e.g cell {1,1}
     */
    private updateCellList() {
        let strength = (this.shipType === 'P')  ? ShipStrength.P : ShipStrength.Q;
        let rowValue = Util.convertStringToAsciiNumber(this.shipStartPoint.charAt(0));
        let colValue = Number(this.shipStartPoint.charAt(1));
        console.log(`rowValue : ${rowValue}, colValue : ${colValue}`);
        let cellValue;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                cellValue = this.getCellValue(rowValue + i, colValue + j);
                this.cellList.push(new Cell(cellValue, strength));
            }
        }
    }
    private getCellValue(rowValue : number, colValue : number) : string{
        return Util.convertAsciiNumberToString(rowValue)+colValue;
    }
}
enum ShipStrength{
    'Q'  = 2,
    'P' = 1
}

export class Cell {
    constructor(public cellValue, public strengh? : number) { }
}
