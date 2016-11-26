import { AllfavesClientPage } from './app.po';

describe('allfaves-client App', function() {
  let page: AllfavesClientPage;

  beforeEach(() => {
    page = new AllfavesClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
