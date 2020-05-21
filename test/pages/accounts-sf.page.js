// 'Template' for Page Object page (parent-teams-sf.page.js)

/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';
import ArrayOperationsComponent from '../pages/utils/array-operations.component';


class AccountsSfPage extends Page {
  /* VARIABLES */

  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Accounts';
    this.pageTitle = 'Accounts';
    this.webForm0 = 'New Account';
    this.webForm1 = 'Create Account: Client';
  }

  /* ELEMENTS */

  /* ACTIONS */
  // Page Title
  get takeActualPageTitle() {
    const pt = browser.$('//nav[@role="navigation" and' +
      ' @aria-label="Breadcrumbs"]/.//span');
    return pt.getText();
  }

  // click on "New" button
  get clickNewBtn() {
    browser.$('//li/a[@title="New"]').click();
    browser.pause(Page.WAITING_MEDIUM);
    return AccountsSfPage;
  }

  // "New Account" web-form:
  // "New Account" title
  get takeActualTitleWf1() {
    const wF1 = browser.$('//div[contains(@class, "isModal")]/' +
      'div[@class="actionBody"]/div/h2');
    return wF1.getText();
  }

  // "Client" radio button
  get selectClientRbWf1() {
    browser.$$('//div[@class="changeRecordTypeRow"]/fieldset/.' +
      '//input[@type="radio"]')[0].click();
  }

  // "Next" button
  get clickNextBtnWf1() {
    browser.$('//div/button/span[text()="Next"]').click();
    browser.pause(Page.WAITING_MEDIUM);
    return AccountsSfPage;
  }

  // "Create Account: Client" web-form:
  // "Create Account: Client" title
  get takeActualTitleWf2() {
    const wF2 = browser.$('//div[@class="content"]/h2[@class="pageDescription"]');
    return wF2.getText();
  }

  // "Create Account: Client" web-form fields:
  // "Trading Name"
  inputTradingNameFldWf2(tradingName) {
    const inpFld = browser.$('');
  }
  // "Trading Type"
  // "Payment Type"
  // Category Code 1 ?
  // Category Code 2 ?
  // Category Code 3 ?
  // "Post Code"
  // Error area

}

export default new AccountsSfPage();


