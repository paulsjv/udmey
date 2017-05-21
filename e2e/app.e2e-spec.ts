import { UdmeyPage } from './app.po';

describe('udmey App', () => {
  let page: UdmeyPage;

  beforeEach(() => {
    page = new UdmeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
