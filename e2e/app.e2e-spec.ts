import { MatafakinchatPage } from './app.po';

describe('matafakinchat App', function() {
  let page: MatafakinchatPage;

  beforeEach(() => {
    page = new MatafakinchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
