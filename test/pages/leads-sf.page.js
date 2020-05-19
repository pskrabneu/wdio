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
    this.webForm = 'Create Lead: ';
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
  // Title of the web-form
  get actualTitleWf() {
    return $$('//div[@class="content"]/h2');
  }

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


  // Alert area
  get alertArea() {
    return $$('//span/span/div[contains(@class,"error")][@role="alert"]');
  }

  /* ACTIONS */
  // Click on New button for open web-form
  get clickNewBtn() {
    (ArrayOperationsComponent.oneVisible(this.newBtn)).click();
    return LeadsSfPage;
  }

  get takeActualAppNameTitle() {
    return (ArrayOperationsComponent.oneVisible(this.actualAppNameTitle)).getText();
  }

  // return actual title of the web-form
  get takeActualTitleWf() {
    (ArrayOperationsComponent.oneVisible(this.actualTitleWf)).getText();
  }

  // is any area displayed?
  get isAlertAreaDisplayed() {
    // TODO the function returns web-element not boolean value
    return (ArrayOperationsComponent.oneVisible(this.alertArea)).isDisplayed();
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
  }

  // input "Post Code" field
  inputPostCodeWf(postCode) {
    this.postCodeFieldWf.setValue(postCode);
  }

  // input "Probability %" field web-form (value from 1 to 100)
  get inputProbabilityFieldWf() {
    const x = Math.floor(Math.random() * Math.floor(94) + 5);
    this.probabilityFieldWf.setValue(x);
  }

  // click on "Save" button web-form
  get clickSaveBtnWf() {
    (ArrayOperationsComponent.oneVisible(this.saveBtnWf)).click();
    browser.pause(LeadsSfPage.WAITING_MEDIUM);
    return LeadSfPage;
  }
}

export default new LeadsSfPage();


