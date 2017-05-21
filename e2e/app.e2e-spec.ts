import { GroupBookItPage } from './app.po';

describe('group-book-it App', () => {
  let page: GroupBookItPage;

  beforeEach(() => {
    page = new GroupBookItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
