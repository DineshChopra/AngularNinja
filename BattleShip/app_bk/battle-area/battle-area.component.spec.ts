import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleAreaComponent } from './battle-area.component';
import { BattleArea } from './battle-area.model';
import { NumberToArrayPipe } from '../number-to-array.pipe';
describe('BattleAreaComponent', () => {
  let component: BattleAreaComponent;
  let fixture: ComponentFixture<BattleAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BattleAreaComponent, NumberToArrayPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should found ship type', () => {
  //   expect(component).toBeTruthy();
  // });
});
