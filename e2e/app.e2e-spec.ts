import { DistinctPage } from './app.po';

describe('distinct App', function() {
  let page: DistinctPage;

  beforeEach(() => {
    page = new DistinctPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
