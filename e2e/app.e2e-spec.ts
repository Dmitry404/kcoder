import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should not be in fire (smoke test)', () => {
    page.navigateTo();
    expect(page.getNavbarBrandText()).toEqual('app is visibility you');
  });
});
