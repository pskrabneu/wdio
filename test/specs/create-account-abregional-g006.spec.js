import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import AccountsSfPage from '../pages/accounts-sf.page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';

/* CONSTANTS USED WITHIN THE TEST */
const tradingName = DataProviderComponent.randomCompanyName +
  ' TRN' + DataProviderComponent.randomLetter +
  DataProviderComponent.randomNumber;
const postCode = DataProviderComponent.randomPostCode;

describe('G006 - Create Account (A, B "Regional Tier"):', function() {
  // open "Accounts" tab
  it('open "Accounts" tab', function() {
    LoginSfPage.performLogin();

    // click on 9dots, input appName and open "Accounts" page
    CommonActionsComponent.openPage(AccountsSfPage, AccountsSfPage.appTitle);

    expect(AccountsSfPage.takeActualAppTitle).toEqual(AccountsSfPage.appTitle);
    console.log('<--"Accounts" page opens correctly-->');
  });

  // click "New" button
  it('should display "New Account" web-form', function() {AccountsSfPage.clickNewBtn;
    const titleWf1 = AccountsSfPage.takeActualTitleWf1;

    // click "Client" radio button
    AccountsSfPage.selectTypeRbWf1('C');

    expect(titleWf1).toEqual(AccountsSfPage.webForm0);
    console.log('<--"New Account" web-form opens correctly-->');
  });

  it('should display "Create Account: Client" web-form', function() {
    AccountsSfPage.clickNextBtnWf1;

    // switch to IFrame
    AccountsSfPage.swToFrame;

    expect(AccountsSfPage.takeActualTitleWf2).toEqual(AccountsSfPage.webForm1a);
    console.log('<--"Create Account: Client" web-form opens correctly-->');
  });

  it('should populate all fields and "Regional Tier" is "A" or "B" then' +
    ' click "Save" button. Error message should be displayed', function() {
    // "Trading Name"
    AccountsSfPage.inputTradingNameFldWf2(tradingName);
    // "Trading Type"
    AccountsSfPage.selectTradingTypeDdlWf2;
    // "Post Code"
    AccountsSfPage.inputPostCodeFldWf2(postCode);
    // "Regional Tier" 'A' or 'B'
    AccountsSfPage.selectRegionalTierDdlWf2;

    AccountsSfPage.clickSaveBtnWf2;

    const isEr = AccountsSfPage.isAlertAreaDisplayed;
    expect(isEr).toEqual(true);
    console.log('<--Error message about client is tier (A or B) is displayed-->');
  });

  // populate "Global Objectives" field and click "Save" button
  it('should populate "Global Objectives" field and click "Save" button,' +
    ' than opens "Account" page with defined "Trading Name" and "Regional Tier"' +
    ' is "A" or "B"', function() {
    const objText = 'The text of objective for "' + tradingName + '" company is: TEXT OBJECTION';
    AccountsSfPage.inputGlobalObjectivesTxtAreaWf2(objText);

    AccountsSfPage.clickSaveBtnWf2;

    // refresh page
    CommonActionsComponent.refreshPage(AccountsSfPage);

    const pTit = browser.getUrl();
    expect(pTit).toContain(AccountsSfPage.pageTitle);
    console.log('<--"Account" page is opened-->');

    const tradN1 = AccountsSfPage.takeActualTradingName1;
    const tradN2 = AccountsSfPage.takeActualTradingName2;

    const namesAreEqual = (tradN1 === tradingName) && (tradN2 === tradingName);
    expect(namesAreEqual).toEqual(true);
    console.log('<--"Trading Name" is correct -->');

    // "Regional Tier" is 'A' or 'B'
    const isAorB = AccountsSfPage.isRegionalTierAorB;
    expect(isAorB).toEqual(true);
  });
});
