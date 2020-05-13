import LoginSfPage from '../pages/login-sf.page';
import HomeSfPage from '../pages/home-sf.page';
import TerritoriesSfPage from '../pages/territories-sf.page';
import DataProvider from '../pages/utils/data-provider.component';
import ArrayOperationsComponent from '../pages/utils/array-operations.component';

describe('Add Post Code to the Territory', function() {
  // **Variables:**
  // Login + Password
  const login = 'peter.borovik@vrpconsulting.com';
  const password = 'VRPMSGlobal202005';

  // For 'Territories' page
  const territoriesTabName = 'Territories';
  const newTerritoryName = DataProvider.randomTerritory;
  const newPostcode = DataProvider.randomLetter +
                      DataProvider.randomLetter +
                      DataProvider.randomNumber +
                      DataProvider.randomNumber;

  // Verify title for Login page
  it('should have the "Login" page title', function() {
    LoginSfPage.open();

    const loginSfPageTitle = browser.getTitle();
    console.log('Login Page Title = ' + loginSfPageTitle);
    expect(loginSfPageTitle).toEqual('Login | Salesforce');
  });

  // Verify title for Home page
  it('should have the "Home" page title', function() {
    LoginSfPage.usernameInput.setValue(login);
    LoginSfPage.passwordInput.setValue(password);
    LoginSfPage.submit();

    const homeSfPageTitle = HomeSfPage.pageTitle;
    expect(homeSfPageTitle).toEqual('Lightning Experience');
  });

  // Verify the 'Territories' tab is opened
  it('should open "Territories" tab correctly', function() {
    HomeSfPage.appLauncherDots;
    HomeSfPage.inputTerritoriesTabName;
    browser.pause(2000);

    HomeSfPage.openTerritoriesPage;
    browser.pause(2000);

    const titlesT = TerritoriesSfPage.takeActualAppNameTitle;

    expect(titlesT).toEqual(territoriesTabName);
    console.log('"Territories" tab opens correctly');
  });

  // 'Create new territory' form is displayed
  it('should open "Create New Territory" form', function() {
    ArrayOperationsComponent.oneVisible(TerritoriesSfPage.newButton).click();

    expect(TerritoriesSfPage.titleNewTerritoryForm).toHaveTextContaining('New Territory');
  });

  // Fields are populated and Territory is saved
  it('should \'populate fields\' and \'Territory saved\' ', function() {
    TerritoriesSfPage.territoryName = newTerritoryName;
    TerritoriesSfPage.inputTerritory;
    TerritoriesSfPage.clickSaveBtn;
    browser.pause(2000);
  });

  // 'Postcode edit form is displayed' and 'Fields are populated'
  it('should \'Add Postcode\' and \'Populate fields\' ', function() {
    TerritoriesSfPage.clickOnRT;

    browser.pause(2000);

    TerritoriesSfPage.clickOnNewBtnRT;

    browser.pause(2000);

    TerritoriesSfPage.postCode = newPostcode;
    TerritoriesSfPage.inputPostcode;

    TerritoriesSfPage.postCodeDescription = 'TD ' + TerritoriesSfPage.postCode;
    TerritoriesSfPage.inputDescription;

    TerritoriesSfPage.clickSaveBtnRT;
    browser.pause(2000);


    // Check that code added
    const queryText = '//a[text()="' + TerritoriesSfPage.postCode + '"]';
    expect(browser.$(queryText)).toExist();


    console.log('\n-----\n' + queryText + '\n-----\n');


    /*    TerritoriesSfPage.clickOnDT;
    browser.pause(2000);

    browser.refresh();


    browser.pause(8000);

    console.log('\n================\n' +
        TerritoriesSfPage.saveBtnRT.isEnabled() +
        ' *** ' +
        TerritoriesSfPage.saveBtnRT.selector +
        '\n====================\n');*/
  });
});
