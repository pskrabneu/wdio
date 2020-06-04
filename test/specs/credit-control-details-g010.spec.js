import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import AccountsSfPage from '../pages/accounts-sf.page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';
import OpportunitySfPage from '../pages/opportunity-sf.page';

/* CONSTANTS USED WITHIN THE TEST */
const tradingName = DataProviderComponent.randomCompanyName +
  ' TRN' + DataProviderComponent.randomLetter +
  DataProviderComponent.randomNumber;
const postCode = DataProviderComponent.randomPostCode;
const accountForEdit;

describe('G010 - Credit Control Details:', function() {
  it('open "Accounts" tab', function() {
    LoginSfPage.performLogin();

    // click on 9dots, input appName and open "Accounts" page
    CommonActionsComponent.openPage(AccountsSfPage, AccountsSfPage.appTitle);
    expect(AccountsSfPage.takeActualAppTitle).toEqual(AccountsSfPage.appTitle);
    utilities.takeScreenshot('should_open_accounts_page');
    console.log('<--"Accounts" page is opened correctly-->');
  });

  // take any "Account" from 1 to 5
  it('should take an "Account" and open it', function() {

  });

  it('should display "Create Account: Client" web-form', function() {

  });

  it('should populate all fields and "Regional Tier" is "A" or "B" then' +
    ' click "Save" button. Error message should be displayed', function() {


  });

  // populate "Global Objectives" field and click "Save" button
  it('should populate "Global Objectives" field and click "Save" button,' +
    ' than opens "Account" page with defined "Trading Name" and "Regional Tier"' +
    ' is "A" or "B"', function() {

  });
});
