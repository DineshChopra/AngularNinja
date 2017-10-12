import { Util } from '../../util';
import { BattleArea } from './battle-area.model';
 
describe('BattleArea', ()=>{
    it('Should create', ()=>{
        let battleArea = new BattleArea('5 E');
        expect(battleArea).toBeTruthy();
        // verify width and height
        expect(battleArea.getWidth()).toEqual(5);
        expect(battleArea.getHeight()).toEqual(5);
        // verify vertical cell values
        expect(battleArea.getVerticalCellValues()).toEqual(['A', 'B', 'C', 'D', 'E']);

        battleArea = new BattleArea('6 F');
        expect(battleArea).toBeTruthy();
        // verify width and height
        expect(battleArea.getWidth()).toEqual(6);
        expect(battleArea.getHeight()).toEqual(6);

        // verify vertical cell values
        expect(battleArea.getVerticalCellValues()).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
    })

})