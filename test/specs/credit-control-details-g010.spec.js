import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import AccountsSfPage from '../pages/accounts-sf.page';
import AccountSfPage from '../pages/account-sf.page';
import CreditControlSfPage from '../pages/credit-control-sf.page';

/* COMMON COMPONENTS IMPORT */
import CommonActionsComponent from '../pages/utils/common-actions.component';

/* CONSTANTS USED WITHIN THE TEST */
let accountForEdit;
let creditControlNumber;

// checking Before and After editing
let creditControlSummaryBefore;
let creditControlSummaryAfter;
let creditControlDebtGroupBefore;
let creditControlDebtGroupAfter;
let creditStatusLevel4After;
let creditStatusLevel5After;
let creditLimit5After;

describe('G010 - Credit Control Details:', function() {
  it('open "Accounts" tab', function() {
    LoginSfPage.performLogin();

    // click on 9dots, input appName and open "Accounts" page
    CommonActionsComponent.openPage(AccountsSfPage, AccountsSfPage.appTitle);
    expect(AccountsSfPage.takeActualAppTitle).toEqual(AccountsSfPage.appTitle);
    utilities.takeScreenshot('should_open_accounts_page');
    console.log('<--"Accounts" page is opened correctly-->');
  });

  // take any "Account" from 1 to 25 and open "Account"
  it('should take an "Account" and open it', function() {
    AccountsSfPage.clickOnRandomAccount;
    accountForEdit = AccountSfPage.takeActualTradingName2;

    creditControlNumber = AccountSfPage.takeCreditControlDetailsNumber;
    AccountSfPage.clickCreditControlDetails;
    creditControlSummaryBefore = CreditControlSfPage.takeCreditAccountSummary;

    const appTitle = CreditControlSfPage.takeActualAppTitle;
    expect(appTitle).toEqual(CreditControlSfPage.appTitle);
    utilities.takeScreenshot('should_open_credit_control_page');
    console.log('<--"Credit Control" page is opened correctly-->');
  });

  // click on "Edit" button and display proper web-form
  it('should display proper web-form for "Edit" Credit Control Number then' +
    ' "Save" and show fields', function() {
    CreditControlSfPage.clickEditBtn;

    const edCcNum = CreditControlSfPage.takeActualTitleEditCcNumberWf1;
    expect(edCcNum).toContain(creditControlNumber);
    utilities.takeScreenshot('should_open_edit_credit_control_web-form');
    console.log('<--"Edit CC-NUM" web-form is opened correctly-->');
  });

  // and populate fields: "Debt Group", "Credit Status Level 4"
  // "Credit Status Level 5", "Credit Limit"
  // then click "Save" button
  // verify the record is saved, "Credit Account Summary" field is updated accordingly
  it('should show saved updated "Credit Control" page', function() {
    CreditControlSfPage.selectDebtGroupWf1;
    creditControlDebtGroupBefore = CreditControlSfPage.takeDebtGroupBeforeWf1;
    // TODO How to work "CreditStateLevels" and how to verify it
    // CreditControlSfPage.selectCreditStateLevel4Wf1;
    // CreditControlSfPage.selectCreditStateLevel5Wf1;
    CreditControlSfPage.inputCreditLimitWf1;
    CreditControlSfPage.clickSaveBtnWf1;

    CommonActionsComponent.refreshPage(CreditControlSfPage);

    creditControlDebtGroupAfter = CreditControlSfPage.takeActualDebtGroupWf1;

    creditControlSummaryAfter = CreditControlSfPage.takeCreditAccountSummary;
    expect(creditControlDebtGroupBefore).toEqual(creditControlDebtGroupAfter);
    expect(creditControlSummaryAfter).toContain('£' +
      CreditControlSfPage.randomCreditLimit);
    utilities.takeScreenshot('should_save_credit_control_web-form');
    console.log('<--"Edit CC-NUM" web-form is saved correctly-->');
  });
});
