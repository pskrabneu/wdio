/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import HomeSfPage from '../pages/home-sf.page';
import ParentTeamsSfPage from '../pages/parent-teams-sf.page';
import TeamsSfPage from '../pages/teams-sf.page';
import TeamSfPage from '../pages/team-sf.page';
import Page from '../pages/page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';

describe('Create team with members', function() {
  /* VARIABLES CREATED DURING THE TEST */

  // Variables:**
  // Login + Password
  const login = 'xxx';
  const password = 'xxx';

  // 'Parent Teams' tab name
  const appName = 'Parent Teams';
  const parentTeamsTabName = 'Parent Teams';
  const parentTeamNameWf = DataProviderComponent.randomParentTeamName +
                            ' PT' + DataProviderComponent.randomLetter +
                            DataProviderComponent.randomLetter +
                            DataProviderComponent.randomNumber;
  const salesRegionWf = DataProviderComponent.randomSalesRegion;
  const descriptionWf = 'Description ' + parentTeamNameWf;

  // 'New Team' web-form
  const teamNameWf = DataProviderComponent.randomParentTeamName +
      ' TM' + DataProviderComponent.randomLetter +
      DataProviderComponent.randomNumber;
  const teamDescriptionWf = 'Description ' + teamNameWf;


  // 1. Login
  // > Verify you logged correctly
  // Verify title for Login page
  it('should have the Login page title', function() {
    LoginSfPage.open();

    const loginSfPageTitle = browser.getTitle();
    expect(loginSfPageTitle).toEqual('Login | Salesforce');

    LoginSfPage.usernameInput.setValue(login);
    LoginSfPage.passwordInput.setValue(password);
    LoginSfPage.submit();

    const homeSfPageTitle = HomeSfPage.pageTitle;
    expect(homeSfPageTitle).toEqual('Lightning Experience');
  });

  // 2. Navigate to the 'Parent Teams' tab
  it('should opens "Parent Team" tab', function() {
    HomeSfPage.appLauncherDots;
    HomeSfPage.inputParentTeamsTabName;

    browser.pause(1000);

    HomeSfPage.openParentTeamsPage;

    browser.pause(2000);

    // verify we are opened the right page
    ParentTeamsSfPage.appName = appName;
    const currentTabName = ParentTeamsSfPage.tabName.getText();
    expect(currentTabName).toEqual(parentTeamsTabName);
    console.log('"Parent Team" tab opens correctly');
  });

  it('should create "Parent Team"', function() {
    browser.pause(8000);

    ParentTeamsSfPage.clickNewBtn;

    browser.pause(2000);

    ParentTeamsSfPage.parentTeamName = parentTeamNameWf;
    ParentTeamsSfPage.inputParentTeamNameWf;
    console.log('Name of the parent team is = ' + parentTeamNameWf);

    ParentTeamsSfPage.salesRegion = salesRegionWf;
    ParentTeamsSfPage.inputSalesRegionWf;
    ParentTeamsSfPage.selectSalesRegionItemWf;

    browser.pause(1000);

    ParentTeamsSfPage.description = descriptionWf;
    ParentTeamsSfPage.inputDescriptionWf;

    browser.pause(1000);
    ParentTeamsSfPage.clickSaveBtn;

    browser.pause(1000);
    const createdParentTeamName = ParentTeamsSfPage.parentTeamName.toString();

    expect(createdParentTeamName).toEqual(parentTeamNameWf);
    console.log('<--"Parent Team" created correctly-->');
  });

  // 3. Navigate to the "Teams" tab and create "New Team"
  it('should navigate to the "Teams" tab' +
      ' and create "New Team"', function() {
    // click on 9dots, input appName and open "Teams" page
    CommonActionsComponent.openPage(TeamsSfPage, TeamsSfPage.appTitle);

    expect(TeamsSfPage.appTitle).toEqual(TeamsSfPage.takeActualAppNameTitle);
    console.log('<-- We are on the right page -->');

    browser.pause(Page.WAITING_MEDIUM);

    // click on 'New ' button, fill the web-form and create 'Team'
    TeamsSfPage.clickNewBtn;
    expect(TeamsSfPage.takeActualNewTeamWfTitle).toEqual(TeamsSfPage.webForm);
    console.log('We are on the right web-form');

    TeamsSfPage.inputTeamName(teamNameWf);
    TeamsSfPage.inputParentTeam(parentTeamNameWf);
    TeamsSfPage.inputDescription(teamDescriptionWf);
    TeamsSfPage.clickSaveBtn;

    expect(TeamSfPage.takeActualTeamName).toEqual(teamNameWf);

    expect(TeamSfPage.takeActualParentTeam).toEqual(parentTeamNameWf);
    console.log('"Team Name" and "Parent Team" are checked');
  });

  it('should assign "User" to the created "Team"', function() {
    // navigate to the Related
    // 'Team Membership' -> 'New'
    // verify we are at the right web-form
    // assign User to the created Team -> click 'New'
    // add user to team
    // press 'Save' button
    // verify 'User' is assigned
    // delete created 'Team'
    // verify the 'Team' is deleted
  });
});


