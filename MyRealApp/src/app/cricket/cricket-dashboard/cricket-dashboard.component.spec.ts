import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketDashboardComponent } from './cricket-dashboard.component';

describe('CricketDashboardComponent', () => {
  let component: CricketDashboardComponent;
  let fixture: ComponentFixture<CricketDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
