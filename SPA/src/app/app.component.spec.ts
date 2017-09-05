import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule.forRoot([])
      ]
    }).compileComponents();
  }));


});
