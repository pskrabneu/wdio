// 'Template' for Page Object page (parent-teams-sf.page.js)

/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import ArrayOperationsComponent from '../pages/utils/array-operations.component';


class AccountsSfPage extends Page {
  /* VARIABLES */

  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Accounts';
    this.pageTitle = 'Account';
    this.webForm0 = 'New Account';
    this.webForm1 = 'Create Account: Client';
  }

  /* ELEMENTS */

  /* ACTIONS */
  // App Title
  get takeActualAppTitle() {
    const pt = browser.$$('//nav[@role="navigation" and' +
      ' @aria-label="Breadcrumbs"]/.//span');
    return (ArrayOperationsComponent.oneVisible(pt)).getText();
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
    const wF1 = browser.$('//div[contains(@class, "modal-body")]/.' +
      '//div[contains(@class, "isModal")]/div[@class="actionBody"]/div/h2');
    return wF1.getText();
  }

  // check is "Client" radio button selected
  get isSelectedClientRbWf1() {
    const rBtns = browser.$$('//div[contains(@class, "modal-body")]/.' +
      '//div[@class="changeRecordTypeRow"]/fieldset/.//input[@type="radio"]');
    return rBtns[0].isSelected();
  }

  // "Next" button
  get clickNextBtnWf1() {
    browser.$('//div/button/span[text()="Next"]').click();
    browser.pause(Page.WAITING_MEDIUM);
    return AccountsSfPage;
  }

  // switch to iframe in order to access elements on web-form 2
  get swToFrame() {
    const fr = browser.$$('//iframe');
    const frame = ArrayOperationsComponent.oneVisible(fr);
    browser.switchToFrame(frame);
  }

  // switch out to the Parent frame
  get swToParentFrame() {
    browser.switchToParentFrame();
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
    const inpFld = browser.$('//div/input[@id="Name"]');
    inpFld.setValue(tradingName);
  }

  // "Trading Type"
  get selectTradingTypeDdlWf2() {
    const x = Math.floor(Math.random() * Math.floor(100));
    const trType = browser.$('//label[text()="Trading Type"]/' +
      '../../following-sibling::td/div/select');
    if (x % 2 === 0) {
      trType.selectByVisibleText('Direct');
    } else {
      trType.selectByVisibleText('Indirect');
    }
  }

  // "Payment Type"
  get selectPaymentTypeDdlWf2() {
    const pType = browser.$$('//label[text()="Payment Type"]/' +
      '../../following-sibling::td/div/select/option');
    pType[0].click();
  }

  // Category Code 1 ?
  // Category Code 2 ?
  // Category Code 3 ?

  // "Post Code"
  inputPostCodeFldWf2(postCode) {
    const pCode = browser.$('//input[@id="BillingPostalCode"]');
    pCode.setValue(postCode);
  }

  // click "Save" button
  get clickSaveBtnWf2() {
    const sBtn = browser.$('//div[contains(@class, "BottomButtons")]/.' +
      '//input[@value="Save " and @type="button"]');
    sBtn.click();
    browser.pause(Page.WAITING_BIG);
    browser.refresh();
    return AccountsSfPage;
  }

  // Error area
  get isAlertAreaDisplayed() {
    const alertArea = browser.$('//div[contains(@class, "error")' +
      ' and contains(@class, "message")]');
    return alertArea.isExisting() && alertArea.isDisplayed();
  }

  // check Page Title "Account"
  get takeActualPageTitle() {
    const pgTitle = browser.$$('//h1/div[contains(@class, "entityNameTitle")]');
    console.log('FP: "Account" size = ' + pgTitle.length);
    return (ArrayOperationsComponent.oneVisible(pgTitle)).getText();
  }

  // check "Trading Name" from left side
  get takeActualTradingName1() {
    const trName = browser.$('//div[@class="slds-media"]/.//h1/.' +
      '//div/span[contains(@class, "OutputText")]');
    return trName.getText();
  }

  // check "Trading Name" from right side
  get takeActualTradingName2() {
    const trNameR= browser.$('//span[text()="Trading Name"]/' +
      '../../div/span/slot/slot/lightning-formatted-text');
    return trNameR.getText();
  }
}

export default new AccountsSfPage();

