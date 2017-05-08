import { Ng4app2Page } from './app.po';

describe('ng4app2 App', () => {
  let page: Ng4app2Page;

  beforeEach(() => {
    page = new Ng4app2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('my-app works!');
  });
});
