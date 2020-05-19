// 'Lead' tab page (lead-sf.page.js)

/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

class LeadSfPage extends Page {
  /* VARIABLES */

  /* CONSTANTS */

  constructor() {
    super();
    this.appTitle = 'Lead';
  }

  /* ELEMENTS */
  // take "App Title"
  get takeActualAppTitle() {
    return $('//h1[@class="pageType"]').getText();
  }

  // take "Page Title"
  get takeActualPageTitle() {
    return $('//h2[@class="pageDescription"]').getText();
  }

  // take "Trading Name" text
  get takeActualTradingName() {
    return $$('//td[text()="Trading Name"]/../td/div')[0].getText();
  }

  // take "Last Name" text
  get takeActualLastName() {
    return $$('//td[text()="Contact Name"]/../td/div')[0].getText();
  }

  // take "Post Code" text
  get takeActualPostCode() {
    return $$('//td[text()="Business Address"]/../td/div')[0].getText();
  }

  // take "Email" text
  get takeActualEmail() {
    return $('//td[text()="Email"]/../td/div/a').getText();
  }



  /* ACTIONS */


}

export default new LeadSfPage();
