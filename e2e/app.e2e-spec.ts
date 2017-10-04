import { Session1RunnerAppPage } from './app.po';

describe('session1-runner-app App', () => {
  let page: Session1RunnerAppPage;

  beforeEach(() => {
    page = new Session1RunnerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
