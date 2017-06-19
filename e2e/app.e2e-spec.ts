import { FlashcardsPage } from './app.po';

describe('flashcards App', () => {
  let page: FlashcardsPage;

  beforeEach(() => {
    page = new FlashcardsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
