import { N2TheoryPage } from './app.po';

describe('n2-theory App', () => {
  let page: N2TheoryPage;

  beforeEach(() => {
    page = new N2TheoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
