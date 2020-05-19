import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import LeadsSfPage from '../pages/leads-sf.page';
import LeadSfPage from '../pages/lead-sf.page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';

/* CONSTANTS USED WITHIN THE TEST */
const tradingName = DataProviderComponent.randomCompanyName +
                      ' TN' +
                      DataProviderComponent.randomNumber +
                      DataProviderComponent.randomLetter;

const lastName = DataProviderComponent.randomLastName +
                  'LN' + DataProviderComponent.randomNumber;

const postCode = DataProviderComponent.randomPostCode;

const eMail = DataProviderComponent.randomEmail;

describe('Create Lead', function() {
  it('should open "Leads" tab', function() {
    LoginSfPage.performLogin();

    // click on 9dots, input appName and open "Leads" page
    CommonActionsComponent.openPage(LeadsSfPage, LeadsSfPage.appTitle);

    expect(LeadsSfPage.takeActualAppNameTitle).toEqual(LeadsSfPage.appTitle);
    console.log('<--"Leads" page opened correctly-->');
  });

  it('should press "New" button and open web-form', function() {
    LeadsSfPage.clickNewBtn;

    expect(LeadsSfPage.takeActualTitleWf).toEqual(LeadsSfPage.webForm);
    console.log('<--"Create Lead" web-form opened correctly-->');
  });

  it('should populate all required fields and press "Save" button,' +
    ' no errors displayed', function() {
    LeadsSfPage.inputTradingNameWf(tradingName);
    LeadsSfPage.inputLastNameWf(lastName);
    LeadsSfPage.selectLeadSourceDdlWf;
    LeadsSfPage.inputPostCodeWf(postCode);
    LeadsSfPage.inputEmailWf(eMail);
    LeadsSfPage.inputProbabilityFieldWf;
    LeadsSfPage.clickSaveBtnWf;

    // verify there are no error or warning area appears
    expect(LeadsSfPage.isAlertAreaDisplayed).toEqual(false);
    console.log('<--No Alert / Error area is displayed-->');
  });

  it('should open created "Lead" with fields defined earlier,' +
    ' no errors displayed', function() {
    expect(LeadSfPage.takeActualAppTitle).toEqual(LeadSfPage.appTitle);
    console.log('<--We are on the right Page-->');

    expect(LeadSfPage.takeActualPageTitle).toEqual(lastName);
    console.log('<--The Page has right Title (Last Name)-->');

    expect(LeadSfPage.takeActualTradingName).toEqual(tradingName);
    console.log('<--The Page has right "Trading Name"-->');

    expect(LeadSfPage.takeActualLastName).toEqual(lastName);
    console.log('<--The Page has right "Last Name"-->');

    expect(LeadSfPage.takeActualPostCode).toEqual(postCode);
    console.log('<--The Page has right "Post Code"-->');

    expect(LeadSfPage.takeActualEmail).toEqual(eMail);
    console.log('<--The Page has right "Email"-->');
  });
});
