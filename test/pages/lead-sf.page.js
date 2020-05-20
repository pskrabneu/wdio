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
    this.pageTitle = 'Lead';
  }

  /* ELEMENTS */


  /* ACTIONS */
  // take "Trading Name" text
  get takeActualTradingName() {
    const el = $('//h1/span/slot/slot/lightning-formatted-text');
    return el.getText();
  }

  // take "Last (or Contact) Name" text
  get takeActualLastName() {
    return $('//p[@title="Contact Name"]/../p/' +
      'slot/lightning-formatted-name').getText();
  }

  // take "Post Code" text
  get takeActualBusinessAddress() {
    return $('//div/span[text()="Business Address"]/../following-sibling::div/' +
      './/a').getAttribute('title');
  }

  // take "Email" text
  get takeActualEmail() {
    return $('//div/span[text()="Email"]/../' +
      'following-sibling::div/.//a').getText();
  }
}

export default new LeadSfPage();
