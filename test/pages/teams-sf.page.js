// 'Teams' tab page (teams-sf.page.js)
import Page from './page';
import ArrayOperationsComponent from './utils/array-operations.component';
import TeamSfPage from './team-sf.page';

class TeamsSfPage extends Page {
  constructor() {
    super();
    // Application Title
    this.appTitle = 'Teams';
    this.webForm = 'New Team';
  }

  /* ELEMENTS */
  /* 'Teams' page */
  get actualAppNameTitle() {
    return $$('//div/nav[@role="navigation"][@aria-label="Breadcrumbs"]/ol/li/span');
  }

  get newBtn() {
    return $$('//ul/li/a[@title="New"][@role="button"]');
  }

  /* 'New Team' web-form */
  // Title of the form
  get actualNewTeamWfTitle() {
    return $$('//article/h2');
  }

  // 'Team Name' input field
  get inputTeamNameWfField() {
    return $$('//div[@role="list"]/div/div/div/div/div/input[@class]')[0];
  }

  // 'Parent Team' input field
  get inputParentTeamWfField() {
    return $('//div[@role="list"]//div[@class="autocompleteWrapper slds-grow"]/' +
        'input[@title="Search Parent Teams"]');
  }

  // 'Description' input field
  get inputDescriptionWfField() {
    return $$('//div[@role="list"]/div/div/div/div/div/input[@class]')[2];
  }

  // 'Save' button
  get saveWfBtn() {
    return $('//div[@class="actionsContainer"]/div/button[@title="Save"]');
  }

  // List of names in 'Team Name' column
  get listTeamName() {
    return $$('//tbody/tr/th/span/a');
  }

  /* ACTIONS */
  get takeActualAppNameTitle() {
    return (ArrayOperationsComponent.oneVisible(this.actualAppNameTitle)).getText();
  }

  get clickNewBtn() {
    ArrayOperationsComponent.oneVisible(this.newBtn).click();
    browser.pause(Page.WAITING_MEDIUM);
    return TeamsSfPage;
  }

  /* 'New Team' web-form */
  get takeActualNewTeamWfTitle() {
    return (ArrayOperationsComponent.oneVisible(this.actualNewTeamWfTitle)).getText();
  }

  inputTeamName(teamName) {
    this.inputTeamNameWfField.setValue(teamName);
  }

  inputParentTeam(parentTeamName) {
    this.inputParentTeamWfField.setValue(parentTeamName);
    browser.pause(Page.WAITING_MEDIUM);
    browser.$('//div[@class="listContent"]/ul/li/a[@role="option"]/div/div[@title="' +
        parentTeamName + '"]').click();
  }

  inputDescription(descriptionTeamName) {
    this.inputDescriptionWfField.setValue(descriptionTeamName);
  }

  get clickSaveBtn() {
    this.saveWfBtn.click();
    browser.pause(Page.WAITING_BIG);
    return TeamSfPage;
  }

  // Verify deleting 'Team' from 'Teams' page after clicking 'Delete' on 'Team' page
  get verifyDeletedTeamIsNotExisted() {
    const step = this.listTeamName.length;
    for (let i = 0; i < step; i++) {
      let tName = this.listTeamName[step].getText();
    }
  }
}

export default new TeamsSfPage();

