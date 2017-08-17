import { AngularPWAPage } from './app.po';

describe('angular-pwa App', () => {
  let page: AngularPWAPage;

  beforeEach(() => {
    page = new AngularPWAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
