// 'Template' for Page Object page (parent-teams-sf.page.js)

/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

class AccountSfPage extends Page {
  /* VARIABLES */

  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Account';
    this.pageTitle = 'Account';
    this.webForm0 = 'New Agency Client';
  }

  /* ELEMENTS */
  get takeActualAppState() {
    const stText = browser.$$('//span[text()="Agency Approval State"]/' +
      '../following-sibling::div/span');
    const valField = ArrayOperationsComponent.oneVisible(stText);
    return valField.getText();
  }

  get editAgencyAppStateBtn() {
    return browser.$('//span[text()="Agency Approval State"]/../../div/button');
  }

  get saveBtn() {
    return browser.$('//button[text()="Save" and @type="button" and @title="Save"]');
  }

  get agencyAppStateDdl() {
    return browser.$('//label[text()="Agency Approval State"]/' +
      '.././/div[@role="none"]');
  }

  /* ACTIONS */
  // check "Trading Name" from left side
  get takeActualTradingName1() {
    const trName = browser.$('//div[contains(@class, "OutputName")]/' +
      'span[contains(@class, "OutputText")]');
    return trName.getText();
  }

  // check "Trading Name" from right side
  get takeActualTradingName2() {
    const trNameR= browser.$('//span[text()="Trading Name"]/' +
      '../../div/span/slot/slot/lightning-formatted-text');
    return trNameR.getText();
  }

  // click on "Related" tab on "Account" page
  get clickRelatedTab() {
    const rTab = browser.$('//a[@data-label="Related"]');
    rTab.click();
    browser.pause(Page.WAITING_MEDIUM);
    return AccountSfPage;
  }

  get clickNewAgencyClientBtn() {
    const newBtn = browser.$('//a[contains(@href, "Agency_Clients")]/' +
      '../../../following-sibling::div/div');
    if (newBtn.isClickable()) {
      newBtn.click();
      browser.pause(Page.WAITING_MEDIUM);
      return AccountSfPage;
    } else {
      console.log('"New" Agency button isn\'t displayed');
    }
  }

  get takeNewAgencyClientTitleWf1() {
    const titleWf = browser.$('//h2[contains(@class, "inlineTitle")]');
    return titleWf.getText();
  }

  get selectClientWf1() {
    const clientInput = browser.$('//span[text()="Client"]/../.././/input' +
      '[@role="combobox" and @title="Search Accounts" and @placeholder="Search Accounts..."]');
    clientInput.click();
    browser.pause(Page.WAITING_SMALL);
    const orgList = browser.$$('//span[text()="Client"]/../.././/input' +
      '[@role="combobox" and @title="Search Accounts" and @placeholder="Search Accounts..."]/' +
      'following-sibling::div/div/ul/li');
    const itemCl = Math.floor(Math.random() * (orgList.length - 3)) + 2;
    orgList[itemCl].click();
  }

  // input "Commission" on web-form "New Agency Client"
  get inputCommissionWf1() {
    const comis = browser.$('//input[contains(@class, "InputSmartNumber")]');
    const numCom = Math.floor(Math.random() * 85);
    comis.setValue(numCom);
  }

  // select "on" checkbox "Active" on web-form "New Agency Client"
  get checkOnActiveCheckboxWf1() {
    const chAct = browser.$('//span[text()="Active"]/../following-sibling::input');
    if (!chAct.isSelected()) {
      chAct.click();
    }
  }

  // click "Save" button on web-form "New Agency Client"
  get clickSaveBtnWf1() {
    const saveBtn = browser.$('//button[@title="Save" and @type="button"]');
    saveBtn.click();
    browser.pause(Page.WAITING_MEDIUM);
    return AccountSfPage;
  }
}

export default new AccountSfPage();
