import { CvWebPage } from './app.po';

describe('cv-web App', function() {
  let page: CvWebPage;

  beforeEach(() => {
    page = new CvWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
