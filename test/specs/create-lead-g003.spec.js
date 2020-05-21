import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import LeadsSfPage from '../pages/leads-sf.page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';

/* CONSTANTS USED WITHIN THE TEST */
const tradingName = DataProviderComponent.randomCompanyName +
                      ' TN' +
                      DataProviderComponent.randomNumber +
                      DataProviderComponent.randomLetter;

const lastName = DataProviderComponent.randomLastName +
                  ' LN' + DataProviderComponent.randomNumber;

const postCode = DataProviderComponent.randomPostCode;

const eMail = DataProviderComponent.randomEmail;

describe('Create Lead: ', function() {
  it('should open "Leads" tab', function() {
    LoginSfPage.performLogin();

    // click on 9dots, input appName and open "Leads" page
    CommonActionsComponent.openPage(LeadsSfPage, LeadsSfPage.appTitle);

    expect(LeadsSfPage.takeActualAppNameTitle).toEqual(LeadsSfPage.appTitle);
    console.log('<--"Leads" page opens correctly-->');
  });

  it('should press "New" button and open web-form', function() {
    LeadsSfPage.clickNewBtn;

    const actualTitleWf = LeadsSfPage.takeActualTitleWf;
    expect(actualTitleWf).toEqual(LeadsSfPage.webForm);
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
    LeadsSfPage.refreshLeads;

    // verify there are no error or warning area appears
    expect(LeadsSfPage.isAlertAreaDisplayed).toEqual(false);
    console.log('<--No Alert / Error area is displayed-->');

    CommonActionsComponent.openPage(LeadsSfPage, LeadsSfPage.pageTitle);
  });

  it('should open created "Lead" with fields defined earlier,' +
    ' no errors displayed', function() {
    // Verify "Trading Name"
    const actualTradingName = LeadsSfPage.takeActualTradingName;
    expect(actualTradingName).toEqual(tradingName);
    console.log('<--The Page has right "Trading Name"-->');

    // Verify "Contact Name" (or "Last Name")
    const actualContactName = LeadsSfPage.takeActualContactName;
    expect(actualContactName).toEqual(lastName);
    console.log('<--The Page has right "Contact Name"-->');

    // Verify "Post Code" within "Business Address"
    const actualBusinessAddress = LeadsSfPage.takeActualPostCode;
    expect(actualBusinessAddress).toContain(postCode);
    console.log('<--The Page has right "Post Code"-->');

    // Verify "Email"
    const actualEmail = LeadsSfPage.takeActualEmail;
    expect(actualEmail).toContain(eMail);
    console.log('<--The Page has right "Email"-->');
  });
});
