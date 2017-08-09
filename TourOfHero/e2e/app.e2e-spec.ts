import { TestappPage } from './app.po';

describe('testapp App', () => {
  let page: TestappPage;

  beforeEach(() => {
    page = new TestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
