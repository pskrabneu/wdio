import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import LeadsSfPage from '../pages/leads-sf.page';
import HomeSfPage from '../pages/home-sf.page';
import ParentTeamsSfPage from '../pages/parent-teams-sf.page';
import TeamsSfPage from '../pages/teams-sf.page';
import TeamSfPage from '../pages/team-sf.page';
import Page from '../pages/page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

/* CONSTANTS USED WITHIN THE TEST */
const tradingName = DataProviderComponent.randomCompanyName +
                      ' TN' +
                      DataProviderComponent.randomNumber +
                      DataProviderComponent.randomLetter;

const lastName = DataProviderComponent.randomLastName +
                  'LN' + DataProviderComponent.randomNumber;

const postCode = DataProviderComponent.randomPostCode;

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






  });

  it('should open created "Lead" with fields defined earlier,' +
    ' no errors displayed', function() {

  });
});
