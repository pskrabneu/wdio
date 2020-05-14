// 'Team' tab page (team-sf.page.js)
import Page from './page';
import ArrayOperationsComponent from './utils/array-operations.component';
import DataProviderComponent from './utils/data-provider.component';

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
}

export default new TeamSfPage();
