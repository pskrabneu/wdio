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

describe('G005 - Create Account:', function() {
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

    // click and check "Client" radio button
    const isSelRb = AccountsSfPage.isSelectedClientRbWf1;
    expect(isSelRb).toEqual(true);
    console.log('<--"Client" radio-button is selected-->');

    expect(titleWf1).toEqual(AccountsSfPage.webForm0);
    console.log('<--"New Account" web-form opens correctly-->');
  });

  it('should display "Create Account: Client" web-form', function() {
    AccountsSfPage.clickNextBtnWf1;

    // switch to IFrame
    AccountsSfPage.swToFrame;

    expect(AccountsSfPage.takeActualTitleWf2).toEqual(AccountsSfPage.webForm1);
    console.log('<--"Create Account: Client" web-form opens correctly-->');
  });

  it('should populate all fields and click "Save" button', function() {
    // "Trading Name"
    AccountsSfPage.inputTradingNameFldWf2(tradingName);
    // "Trading Type"
    AccountsSfPage.selectTradingTypeDdlWf2;
    // "Post Code"
    AccountsSfPage.inputPostCodeFldWf2(postCode);

    AccountsSfPage.clickSaveBtnWf2;

    const isEr = AccountsSfPage.isAlertAreaDisplayed;
    expect(isEr).toEqual(false);
    console.log('<--After "Save" button no error displayed-->');
  });

  // Account is created
  it('should opens "Account" page with defined "Trading Name"', function() {
    const pTit = browser.getUrl();
    expect(pTit).toContain(AccountsSfPage.pageTitle);
    console.log('<--"Account" page is opened-->');

    const tradN1 = AccountsSfPage.takeActualTradingName1;
    const tradN2 = AccountsSfPage.takeActualTradingName2;

    const namesAreEqual = (tradN1 === tradingName) && (tradN2 === tradingName);
    expect(namesAreEqual).toEqual(true);
    console.log('<--"Trading Name" is correct -->');
  });
});
