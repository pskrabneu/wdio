/* PAGES IMPORT */
import Page from './page';

/* COMMON COMPONENTS IMPORT */
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

class CreditControlSfPage extends Page {
  /* VARIABLES */

  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Credit Control';
    // this.pageTitle = 'Account';
    // this.webForm0 = 'New Agency Client';
  }

  /* ELEMENTS */
  // "Edit" button
  get editBtn() {
    return browser.$('//button[@name="Edit" and text()="Edit"]');
  }

  /* ACTIONS */
  get clickEditBtn() {
    this.editBtn.click();
    return CreditControlSfPage;
  }

  get takeCreditAccountSummary() {
    const casText = browser.$('//span[text()="Credit Account Summary"]/' +
      '../following-sibling::div/span/.//span');
    return casText.getText();
  }
}

export default new CreditControlSfPage();
