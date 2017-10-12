import { HonTemExamplePage } from './app.po';

describe('hon-tem-example App', () => {
  let page: HonTemExamplePage;

  beforeEach(() => {
    page = new HonTemExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
