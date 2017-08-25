import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTemplateFormComponent } from './hero-template-form.component';

describe('HeroTemplateFormComponent', () => {
  let component: HeroTemplateFormComponent;
  let fixture: ComponentFixture<HeroTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
