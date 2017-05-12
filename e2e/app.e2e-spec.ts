import { VerbsPage } from './app.po';

describe('verbs App', () => {
  let page: VerbsPage;

  beforeEach(() => {
    page = new VerbsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
