export default class Page {
  static WAITING_BIG = 8000;
  static WAITING_MEDIUM = 5000;
  static WAITING_SMALL = 2000;

  constructor() {
    this.appTitle = 'My Page';
    this.pageTitle = 'My Page Title';
    this.webForm = 'Web form';
  }

  open(path) {
    browser.url(path);
  }
}

