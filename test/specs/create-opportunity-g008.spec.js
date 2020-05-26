import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import OpportunitySfPage from '../pages/opportunity-sf.page';
import HomeSfPage from '../pages/home-sf.page';
import ParentTeamsSfPage from '../pages/parent-teams-sf.page';
import TeamsSfPage from '../pages/teams-sf.page';
import TeamSfPage from '../pages/team-sf.page';
import Page from '../pages/page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

const opportunityName = 'AT Opportunity ' + DataProviderComponent.randomNumber;
const tradingName = 'Auto Test Account';

describe('Opportunity', function() {
  it('should open "Opportunity" tab', function() {
    LoginSfPage.performLogin();

    // click on 9dots, input appName and open "Leads" page
    CommonActionsComponent.openPage(OpportunitySfPage, OpportunitySfPage.appTitle);

    expect(OpportunitySfPage.takeActualAppNameTitle).toEqual(OpportunitySfPage.appTitle);
    console.log('<--"Opportunity" page opened correctly-->');
  });

  it('should press "New" button and open web-form', function() {
    OpportunitySfPage.clickNewBtn;

    expect(OpportunitySfPage.takeActualTitleWf).toEqual(OpportunitySfPage.webForm);
    console.log('<--"Create Opportunity" web-form opened correctly-->');
  });

  it('Create Opportunity, no errors displayed', function() {
    OpportunitySfPage.selectDirectClient;
    OpportunitySfPage.createOpportunity(tradingName, opportunityName);
  });

  it('Open created opportunity,' +
    ' no errors displayed', function() {
    CommonActionsComponent.refreshPage(OpportunitySfPage);

    const pTit = browser.getUrl();
    expect(pTit).toContain(OpportunitySfPage.pageTitle);
    console.log('<--"Opportunity" page is opened-->');

    const oppNameAct = OpportunitySfPage.getOpportunityName;

    expect(oppNameAct).toEqual(opportunityName);
    console.log('<--"Opportunity Name" is correct -->');
  });
});
