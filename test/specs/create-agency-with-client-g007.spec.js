import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import AccountsSfPage from '../pages/accounts-sf.page';
import AccountSfPage from '../pages/account-sf.page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';
import Page from '../pages/page';

/* CONSTANTS USED WITHIN THE TEST */
const tradingName = DataProviderComponent.randomCompanyName +
  ' TRN' + DataProviderComponent.randomLetter +
  DataProviderComponent.randomNumber;
const postCode = DataProviderComponent.randomPostCode;

describe('G007 - Create Agency with Client:', function() {
  it('open "Accounts" tab', function() {
    LoginSfPage.performLogin();

    // click on 9dots, input appName and open "Accounts" page
    CommonActionsComponent.openPage(AccountsSfPage, AccountsSfPage.appTitle);

    expect(AccountsSfPage.takeActualAppTitle).toEqual(AccountsSfPage.appTitle);
    console.log('<--"Accounts" page opens correctly-->');
  });

  it('should display "New Account" web-form', function() {
    AccountsSfPage.clickNewBtn;
    const titleWf1 = AccountsSfPage.takeActualTitleWf1;

    // click "Agency" radio button
    AccountsSfPage.selectTypeRbWf1('A');

    expect(titleWf1).toEqual(AccountsSfPage.webForm0);
    console.log('<--"New Account" web-form opens correctly, "Agency" selected-->');
  });

  it('should display "Create Account: Agency" web-form', function() {
    AccountsSfPage.clickNextBtnWf1;

    // switch to IFrame
    AccountsSfPage.swToFrame;

    const titleWf2 = AccountsSfPage.takeActualTitleWf2;
    expect(titleWf2).toEqual(AccountsSfPage.webForm1b);
    console.log('<--"Create Account: Agency" web-form opens correctly-->');
    utilities.takeScreenshot('should_display_create_agency_web-form');
  });

  it('should populate all fields and click "Save" button', function() {
    // "Trading Name"
    AccountsSfPage.inputTradingNameFldWf2(tradingName);
    // "Post Code"
    AccountsSfPage.inputPostCodeFldWf2(postCode);
    // unselect "Needs Agency Approval"
    AccountsSfPage.selectOffNeedsApprovalChckBoxWf2;
    // select "Approved" in "Agency Approval State"
    AccountsSfPage.selectAgencyApprovalStateWf2;

    AccountsSfPage.clickSaveBtnWf2;

    const isEr = AccountsSfPage.isAlertAreaDisplayed;
    expect(isEr).toEqual(false);
    console.log('<--After "Save" button no error displayed-->');
    utilities.takeScreenshot('should_populate_fields_click_save_btn');
  });

  it('should opens "Account" page with defined "Trading Name"', function() {
    CommonActionsComponent.refreshPage(AccountSfPage);

    const pTit = browser.getUrl();
    expect(pTit).toContain(AccountSfPage.pageTitle);
    console.log('<--"Account" page is opened-->');

    const tradN1 = AccountSfPage.takeActualTradingName1;
    const tradN2 = AccountSfPage.takeActualTradingName2;

    const namesAreEqual = (tradN1 === tradingName) && (tradN2 === tradingName);
    expect(namesAreEqual).toEqual(true);
    console.log('<--"Trading Name" is correct -->');
    utilities.takeScreenshot('should_open_accounts_page_with_trading_name');
  });

  it('should change status in "Approved"', function() {
    const status = AccountSfPage.takeActualAppState;
    expect(status).toEqual('Approved');
    console.log('<--"Agency Approval State" is "Approved" -->');
    utilities.takeScreenshot('agency_approval_state_is_approved');
  });

  it('should display "New Agency Client" web-form', function() {
    // click on "Related" tab
    AccountSfPage.clickRelatedTab;

    // click "Clients" -> "New"
    AccountSfPage.clickNewAgencyClientBtn;
    browser.buttonDown(2);
    browser.buttonUp(2);

    // check web-form "New Agency Client" is opened
    const wfTitle = AccountSfPage.takeNewAgencyClientTitleWf1;
    expect(wfTitle).toEqual(AccountSfPage.webForm0);
  });


  it('should populate required fields then click "Save"' +
    ' and show "Client" defined before', function() {
    // populate: "Agency", "Client", "Commission", "Active" = "True"
    AccountSfPage.selectClientWf1;
    AccountSfPage.inputCommissionWf1;
    AccountSfPage.checkOnActiveCheckboxWf1;

    // and click "Save"
    AccountSfPage.clickSaveBtnWf1;
    browser.debug();
    // TODO
  });






  // verify "Clients" -> "Client" is "Client" defined before

});
