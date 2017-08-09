import { BossyParentPage } from './app.po';

describe('bossy-parent App', () => {
  let page: BossyParentPage;

  beforeEach(() => {
    page = new BossyParentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
