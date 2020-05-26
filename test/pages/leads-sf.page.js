// 'Leads' tab page (leads-sf.page.js)

/* PAGES IMPORT */
import Page from './page';
import LeadSfPage from './lead-sf.page';

/* COMMON COMPONENTS IMPORT */
import ArrayOperationsComponent from './utils/array-operations.component';

class LeadsSfPage extends Page {
  /* VARIABLES */
  // web-form

  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Leads';
    this.pageTitle = 'Leads';
    this.webForm = 'Create Lead:';
  }

  /* ELEMENTS */
  // App Name Title
  get actualAppNameTitle() {
    return $$('//div/nav[@role="navigation"][@aria-label="Breadcrumbs"]/ol/li/span');
  }

  get newBtn() {
    return $$('//a[@title="New"][@role="button"]/div[@title="New"]');
  }

  /* web-form "Create Lead" */
  // "Trading Name" field web-form
  get tradingNameFieldWf() {
    return $('//table/.//input[@name="Company"]');
  }

  // "Last Name" field web-form
  get lastNameFieldWf() {
    return $('//table/.//div[contains(@class, "requiredInput")]/' +
      'input[contains(@name, "LastName")]');
  }

  // "Lead Source" DDL web-form
  get leadSourceDdlWf() {
    return $$('//table/.//div[contains(@class, "requiredInput")]/.' +
      '//select[@name="LeadSource"]/option[not(contains(text(), "None"))]');
  }

  // "Post Code" field
  get postCodeFieldWf() {
    return $('//table/.//tr/td/input[@name="PostalCode"]');
  }

  // "Contact email unknown" checkbox
  // either "Post Code" or "Contact email unknown" are accepted

  // "Probability (%)" number field (from 1 to 100)
  get probabilityFieldWf() {
    return $('//table[@class="detailList"]/.' +
      '//input[contains(@name, "Probability")]');
  }

  // "Save" button
  get saveBtnWf() {
    return $$('//td[contains(@class, "Button")]/span/input[@type="button" and @value="Save "]');
  }

  // Alert area on web-form
  get alertArea() {
    return $$('//span/span/div[contains(@class,"error")][@role="alert"]');
  }

  // Collecting info after saving
  // Take visible table and first row
  get takeFirstRow() {
    const tb = browser.$$('//table');
    const vTable = ArrayOperationsComponent.oneVisible(tb);
    return vTable.$$('//tbody/tr')[0];
  }
  // "Trading Name"
  get takeActualTradingName() {
    return this.takeFirstRow.$$('//td')[2].getText();
  }

  // "Contact Name"
  get takeActualContactName() {
    return this.takeFirstRow.$$('//th[@scope="row"]/span/a')[0].getText();
  }

  // "Post Code"
  get takeActualPostCode() {
    return this.takeFirstRow.$$('//td')[3].getText();
  }

  // "Email"
  get takeActualEmail() {
    return this.takeFirstRow.$$('//td')[5].getText();
  }

  /* ACTIONS */
  // Click on New button for open web-form
  get clickNewBtn() {
    (ArrayOperationsComponent.oneVisible(this.newBtn)).click();
    browser.pause(Page.WAITING_MEDIUM);
    return LeadsSfPage;
  }

  get takeActualAppNameTitle() {
    return (ArrayOperationsComponent.oneVisible(this.actualAppNameTitle)).getText();
  }

  // return actual title of the web-form
  get takeActualTitleWf() {
    const iFrms = browser.$('//iframe[@height="100%" and @width="100%"]');
    browser.switchToFrame(iFrms);
    const wTitle = $('//div[@class="content"]/' +
      'h2[@class="pageDescription"]');
    return wTitle.getText();
  }

  // is any "alert/error" area displayed?
  // return true -- if area is displayed
  // return false -- if no area is displayed
  get isAlertAreaDisplayed() {
    return ArrayOperationsComponent.noDisplayed(this.alertArea);
  }

  // input "Trading Name" web-form
  inputTradingNameWf(tradingName) {
    this.tradingNameFieldWf.setValue(tradingName);
  }

  // input "Last Name" web-form
  inputLastNameWf(lastName) {
    this.lastNameFieldWf.setValue(lastName);
  }

  // select "Lead Source" DDL web-form
  get selectLeadSourceDdlWf() {
    const x = Math.floor(Math.random() * this.leadSourceDdlWf.length);
    this.leadSourceDdlWf[x].click();
    browser.pause(Page.WAITING_SMALL);
  }

  // input "Post Code" field web-form
  inputPostCodeWf(postCode) {
    this.postCodeFieldWf.setValue(postCode);
  }

  // input "Email" field web-form
  inputEmailWf(email) {
    const em = $$('//input[@name="Email"]');
    (ArrayOperationsComponent.oneVisible(em)).setValue(email);
  }

  // input "Probability %" field web-form (value from 1 to 100)
  get inputProbabilityFieldWf() {
    const x = Math.floor(Math.random() * Math.floor(94) + 5);
    this.probabilityFieldWf.setValue(x);
  }

  // click on "Save" button web-form
  get clickSaveBtnWf() {
    (ArrayOperationsComponent.oneVisible(this.saveBtnWf)).click();
    browser.pause(Page.WAITING_BIG);
    return LeadSfPage;
  }

  // refresh page
  get refreshLeads() {
    browser.refresh();
    return LeadSfPage;
  }
}

export default new LeadsSfPage();


