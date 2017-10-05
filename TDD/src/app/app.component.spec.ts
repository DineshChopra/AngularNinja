import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UserService } from './service/user.service';

describe('AppComponent', () => {
  let fixture ;
  let app ;
  let userServiceStub, userService;
  beforeEach(async(() => {
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      // providers:    [ UserService ]
      providers:    [ {provide: UserService, useValue: userServiceStub } ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
        // UserService from the root injector
        userService = TestBed.get(UserService); 
  }));

  it('should create the app', async(() => {

    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');

  }));

  it('should render title in a h1 tag', async(() => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    app.title = "newgen";
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to newgen!');

  }));

  it(`should test sum api`, async(() => {
    let num1 = 10, num2 = 20;
    expect(app.sum(num1, num2)).toEqual(num1+num2);
  }));
});
