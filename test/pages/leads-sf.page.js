// 'Leads' tab page (leads-sf.page.js)

/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import DataProvider from './utils/data-provider.component';
import ArrayOperationsComponent from './utils/array-operations.component';

class LeadsSfPage extends Page {
  /* VARIABLES */
  // web-form
  traidingName = ''; // TODO

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

  // web-form "Create Lead"
  // Title of the web-form
  get actualTitleWf() {
    return $$('//div[@class="content"]/h2');
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
    return (ArrayOperationsComponent.oneVisible(this.alertArea)).isDisplayed();
  }
}

export default new LeadsSfPage();


