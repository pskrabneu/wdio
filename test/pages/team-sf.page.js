// 'Team' tab page (team-sf.page.js)
import Page from './page';
import TeamsSfPage from './teams-sf.page';

import ArrayOperationsComponent from './utils/array-operations.component';

class TeamSfPage extends Page {
  constructor() {
    super();
    // Application Title
    this.pageTitle = 'Team';
    this.webForm = 'New Team Membership';
  }

  /* ELEMENTS */

  // Team Name
  get actualTeamName() {
    return $('//span[text()[normalize-space(.)="Team Name"]]' +
        '/../../div/span/slot/slot/lightning-formatted-text');
  }

  // Parent Team
  get actualParentTeam() {
    return $$('//span[text()[normalize-space(.)="Parent Team"]]' +
          '/../../div/span/slot/slot/force-lookup//a');
  };

  /* RELATED TAB */
  // Related tab
  get relatedTab() {
    return $$('//a[@data-label="Related"][@role="tab"]');
  }

  // Team Membership -> 'New' button
  get teamMembershipNewBtnRT() {
    return $$('//h2/a/span[text()="Team Membership"]/../../../../../div/div/ul/li/a');
  }

  // Web-form title
  get wFTitle() {
    return $('//article/h2');
  }

  get inputUserWfField() {
    return $$('//input[@placeholder="Search People..."]');
  }

  // 'Save' button on 'New Team Membership' web-form
  get saveBtnWf() {
    return $('//button[@title="Save"]');
  }

  // Team Name after saving
  get actualTeamNameRT() {
    return $('//h1/div[text()="Team"]/../slot/' +
      'slot[@slot="primaryField"]/lightning-formatted-text');
  }

  // 'User Name' after assigning on 'Related' tab
  get actualUserNameRT() {
    return $('//table/tbody/tr/th[not(@class)]/div/a');
  }

  // 'Down Arrow' button for delete 'Team'
  get downArrowBtnRT() {
    return $$('//*[text()[normalize-space(.) = "Show more actions"]]/..');
  }

  // 'Delete' action in 'Actions' section of 'Team' page
  get deleteBtn() {
    return $$('//div[@role="menu"]/.//a[@name="Delete"]');
  }

  // 'Delete' button on 'Delete Team' pop-up
  get deleteBtnDT() {
    return $('//div/div/button[@aria-live="off"][@type="button"][@title="Delete"]');
  }

  /* ACTIONS */
  get takeActualTeamName() {
    return this.actualTeamName.getText();
  }

  get takeActualParentTeam() {
    return (ArrayOperationsComponent.oneVisible(this.actualParentTeam)).getText();
  }

  get clickRelatedTab() {
    (ArrayOperationsComponent.oneVisible(this.relatedTab)).click();
    browser.pause(Page.WAITING_MEDIUM);
    return TeamSfPage;
  }

  // Team Membership -> click 'New' button
  get clickTeamMembershipNewBtn() {
    (ArrayOperationsComponent.oneVisible(this.teamMembershipNewBtnRT)).click();
    browser.pause(Page.WAITING_BIG);
    return TeamSfPage;
  }

  // Take text on web-form title
  get takeActualWfName() {
    return this.wFTitle.getText();
  }

  // Input 'User' into 'User' field
  selectUserWfField(userName) {
    ArrayOperationsComponent.oneVisible(this.inputUserWfField).setValue(userName);
    browser.pause(Page.WAITING_MEDIUM);
    browser.$('//div[@class="listContent"]/ul[@role="presentation"]/' +
      'li/a/div/div[@title="' + userName + '"]').click();
  }

  // Click on 'Save' button within the 'New Team Membership' web-form
  get clickSaveWfBtn() {
    this.saveBtnWf.click();
    browser.pause(Page.WAITING_MEDIUM);
    return TeamSfPage;
  }

  // Take actual 'Team' after saving
  get takeActualTeamNameRT() {
    return this.actualTeamNameRT.getText();
  }

  // Take actual 'User Name' after saving on 'Related' tab
  get takeActualUserNameRT() {
    return this.actualUserNameRT.getText();
  }

  // Click on 'Down Arrow'
  get clickDownArrowBtnRT() {
    (ArrayOperationsComponent.oneVisible(this.downArrowBtnRT)).click();
    // return TeamSfPage;
  }

  // Click on 'Delete' button and delete 'Teat' created in previous steps
  get clickDeleteBtn() {
    this.clickDownArrowBtnRT;

    console.log('Delete button is here = ' + this.deleteBtn.length);
    console.log('Delete button is clickable = ' +
      (ArrayOperationsComponent.oneVisible(this.deleteBtn)).isClickable());

    (ArrayOperationsComponent.oneVisible(this.deleteBtn)).click();
    browser.pause(Page.WAITING_MEDIUM);
    return TeamSfPage;
  }

  // Confirm deleting on "Delete Team" pop-up window
  get clickDeleteBtnDT() {
    this.deleteBtnDT.click();
    return TeamsSfPage;
  }
}

export default new TeamSfPage();
