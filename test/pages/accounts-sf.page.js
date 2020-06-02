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
    this.webForm1a = 'Create Account: Client';
    this.webForm1b = 'Create Account: Agency';
  }

  /* ELEMENTS */
  // "Accounts" page, click on down-arrow for editing "Account"
  get editAccountLink() {
    const edAccountLinks = browser.$$('//div/div[@role="menu"]/ul/li/a/' +
      'div[@title="Edit" and @role="button"]');
    for (let i = 0; i < edAccountLinks.length; i++) {
      console.log('FP: is edit link visible? = ' + edAccountLinks[i].isDisplayed());
    }

    return ArrayOperationsComponent.oneVisible(edAccountLinks);
  }

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

  // click "Client" or "Agency" radio button
  selectTypeRbWf1(accType) {
    let tP;
    if (accType === 'C') {
      tP = 'Client';
    } else if (accType === 'A') {
      tP = 'Agency';
    } else {
      console.log('Error type!!!');
    }
    const rBtns = browser.$('//span[text()="' + tP + '"]/../preceding-sibling::div');
    rBtns.click();
  }

  // "Next" button
  get clickNextBtnWf1() {
    browser.$('//div/button/span[text()="Next"]').click();
    browser.pause(Page.WAITING_BIG);
    return AccountsSfPage;
  }

  // switch to iframe in order to access elements on web-form 2
  get swToFrame() {
    const fr = browser.$$('//iframe[contains(@title, "accessibility")]');
    const frame = ArrayOperationsComponent.oneVisible(fr);
    browser.switchToFrame(frame);
  }

  // switch out to the Parent frame
  get swToParentFrame() {
    browser.switchToParentFrame();
  }

  // "Create Account: Client/Agency" web-form:
  // "Create Account: Client/Agency" title
  get takeActualTitleWf2() {
    const wF2 = browser.$('//div[@class="content"]/h2[@class="pageDescription"]');
    wF2.waitForDisplayed();
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

  // "Regional Tier 'A' or 'B'"
  get selectRegionalTierDdlWf2() {
    const x = Math.floor(Math.random() * Math.floor(100));
    const regTier = browser.$('//label[text()="Regional Tier"]/' +
      '../../../td/select');
    if (x % 2 === 0) {
      regTier.selectByVisibleText('A');
    } else {
      regTier.selectByVisibleText('B');
    }
  }

  // "Global Objectives" text area
  inputGlobalObjectivesTxtAreaWf2(objectiveText) {
    const txtArea = browser.$('//textarea[contains(@id, "Client_Objectives")]');
    txtArea.setValue(objectiveText);
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

  // select-off "Needs Agency Approval" checkbox
  get selectOffNeedsApprovalChckBoxWf2() {
    const chckBox = browser.$('//span/input[@id="Needs_Agency_Approval__c"]');
    const isSelected = chckBox.getAttribute('checked');
    if (isSelected === 'checked') {
      chckBox.click();
    }
  }

  // select value "Agency Approval State" = "Approved"
  get selectAgencyApprovalStateWf2() {
    const agencyApprovalState = browser.$('//select[@id="Agency_Approval_State__c"]');
    agencyApprovalState.selectByVisibleText('Approved');
  }

  // click "Save" button
  get clickSaveBtnWf2() {
    const sBtns = browser.$$('//div[contains(@class, "BottomButtons")]//' +
      'input[@value="Save " and @type="button" and' +
      ' contains(@onclick, "onBeforeSave")]');
    if (sBtns.length > 0) {
      const sBtn = ArrayOperationsComponent.oneVisible(sBtns);
      sBtn.click();
      browser.pause(Page.WAITING_BIG);
      return AccountsSfPage;
    } else {
      console.log('Save btn is not found');
      // browser.debug();
    }
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

  // take "Regional Tier" field
  get takeActualRegionalTier() {
    const tierAorB = browser.$('//span[text()="Regional Tier"]/' +
      '../following-sibling::div/span');
    return tierAorB.getText();
  }

  // check value of "Regional Tier" field 'A' or 'B'
  get isRegionalTierAorB() {
    const rTier = this.takeActualRegionalTier;

    if (rTier === 'A' || rTier === 'B') {
      return true;
    } else {
      return false;
    }
  }
}

export default new AccountsSfPage();


