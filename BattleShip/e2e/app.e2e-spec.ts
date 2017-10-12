import { BattleShipPage } from './app.po';

describe('battle-ship App', () => {
  let page: BattleShipPage;

  beforeEach(() => {
    page = new BattleShipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bs works!');
  });
});
