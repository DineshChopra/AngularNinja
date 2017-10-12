export class Util{
    private static BASE_VALUE = 64;
    static convertStringToAsciiNumber(str : string){
        return str.charCodeAt(0) - this.BASE_VALUE;
    }
    static convertAsciiNumberToString(num) : string{
        let charCode = Util.BASE_VALUE + num;
        return String.fromCharCode(charCode);
    }
    static SEPERATOR = ' ';
    static INPUTS = {
        battle_area_size : '6 F',
        battle_ship_count : 2,
        battle_ships : [
            'Q 1 1 A1 B2',
            'P 2 1 D4 C3'
        ],
        missiles : [
            'A1 B2 B2 B3',
            'A1 B2 B3 A1 D1 E1 D4 D4 D5 D5'
        ]
    }

    static getCellValue(rowValue : number, colValue : number) : string{
        return Util.convertAsciiNumberToString(rowValue)+colValue;
    }
}
export const SHIP_TYPE = {
    STRONG : 'Q',
    WEEK : 'P'
}

export const SHIP_STRENGTH_MAP = {
    'Q' : 3,
    'P' : 1
};