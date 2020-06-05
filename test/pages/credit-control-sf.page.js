/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

// position in "Debt Group" list
let indexDebtGroup;

class CreditControlSfPage extends Page {
  /* VARIABLES */

  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Credit Control';
    this.randomCreditLimit = 0;
    // this.pageTitle = 'Account';
    // this.webForm0 = 'New Agency Client';
  }

  /* ELEMENTS */
  // "Edit" button
  get editBtn() {
    return browser.$('//button[@name="Edit" and text()="Edit"]');
  }

  // "Edit CC-NUMBER" title web-form
  get takeActualTitleEditCcNumberWf1() {
    const ccNum = browser.$('//div[contains(@class, "modal")]/' +
      'h2[contains(@class, "title")]');
    ccNum.waitForDisplayed();
    return ccNum.getText();
  }

  // click on "Debt Group" DDL
  get clickDebtGroupDdlWf1() {
    const dgDdl = browser.$('//span[text()="Debt Group"]/../' +
      'following-sibling::div/.//a[@class="select"]');
    dgDdl.click();
    return browser.$$('//div[@class="select-options" and @role="menu"]/' +
      'ul[@class="scrollable" and @role="presentation"]/li[@role="presentation"]/' +
      'a[@role="menuitemradio"]');
  }

  /* ACTIONS */
  get clickEditBtn() {
    this.editBtn.waitForClickable();
    this.editBtn.click();
    return CreditControlSfPage;
  }

  get takeCreditAccountSummary() {
    const casText = browser.$('//span[text()="Credit Account Summary"]/' +
      '../following-sibling::div/span/.//span');
    casText.waitForDisplayed();
    return casText.getText();
  }

  // take "Credit Control" page title
  get takeActualAppTitle() {
    const appTitle = browser.$('//img[@title="Credit Control"]/' +
      '../../../../../../.././/h1/div');
    return appTitle.getText();
  }

  // select the "Debt Group" field on "Edit CC-NUM" web-form
  get selectDebtGroupWf1() {
    this.clickDebtGroupDdlWf1;
    indexDebtGroup = Math.floor(Math.random() * (this.clickDebtGroupDdlWf1.length - 3)) + 1;
    this.clickDebtGroupDdlWf1[indexDebtGroup].click();
    browser.pause(Page.WAITING_SMALL);
  }

  // take "Debt Group" on "Edit CC-NUM" web-form before saving
  get takeDebtGroupBeforeWf1() {
    const DgTxt = browser.$('//div[@class="select-options" and @role="menu"]/' +
      'ul[@class="scrollable" and @role="presentation"]/li[@role="presentation"]/' +
      'a[@role="menuitemradio" and @class="selected"]');
    return DgTxt.getText();
  }

  // return text of "Debt Group" on "Edit CC-NUM" web-form after saving
  get takeActualDebtGroupWf1() {
    const debtGroupText = browser.$('//force-record-layout-section/.//span' +
      '[text()="Debt Group"]/../following-sibling::div/.//lightning-formatted-text[text()]');
    debtGroupText.waitForDisplayed();
    return debtGroupText.getText();
  }

  // delete "Credit Status Level 4"
  get deleteCredStatLev4() {
    const delBtn = browser.$('//span[text()="Credit Status Level 4"][@class=""]/' +
      '../following-sibling::div/.//a[@class="deleteAction"]');
    delBtn.click();
    return CreditControlSfPage;
  }

  // select "Credit Status Level 4"
  get selectCreditStateLevel4Wf1() {
    this.deleteCredStatLev4;
    const listLevs4 = browser.$$('//div[@role="listbox"]/div[@class="listContent"]/' +
      'ul/li/a[@role="option"]');
    const itemNum = Math.floor(Math.random() * listLevs4.length);
    listLevs4[itemNum].click();
  }

  // delete "Credit Status Level 4"
  get deleteCredStatLev5() {
    const delBtn = browser.$('//span[text()="Credit Status Level 5"][@class=""]/' +
      '../following-sibling::div/.//a[@class="deleteAction"]');
    delBtn.click();
    return CreditControlSfPage;
  }

  // select "Credit Status Level 5"
  get selectCreditStateLevel5Wf1() {
    this.deleteCredStatLev5;
    const listLevs5 = browser.$$('//span[text()="Credit Status Level 5"]/' +
      '../following-sibling::div/.//div[@class="listContent"]/ul/li/a');
    const itemNum = Math.floor(Math.random() * listLevs5.length);
    listLevs5[itemNum].click();
  }

  // input "Credit Limit" on web-form
  get inputCreditLimitWf1() {
    const inputFld = browser.$('//span[text()="Credit Limit" and @class=""]/' +
      '../following-sibling::input');
    // from 5 to 40 K.pounds
    this.randomCreditLimit = (Math.floor(Math.random() * 35) + 5) * 1000;
    if (inputFld.isEnabled()) {
      inputFld.click();
      inputFld.clearValue();
    }
    inputFld.setValue(this.randomCreditLimit);
  }

  // take actual "Credit Limit" after saving
  get takeActualCreditLimit() {
    const credLim = browser.$('//span[text()="Credit Limit"]/../following-sibling::div/.' +
      '//lightning-formatted-text');
    return credLim.getText();
  }

  // click "Save" button on web-form 1
  get clickSaveBtnWf1() {
    const saveBtn = browser.$('//div[contains(@class, "modal-footer")]/' +
      './/button[@title="Save" and @type="button"]');
    saveBtn.click();
    return CreditControlSfPage;
  }
}

export default new CreditControlSfPage();
