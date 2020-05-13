// 'Team' tab page (team-sf.page.js)
import Page from './page';
import ArrayOperationsComponent from './utils/array-operations.component';

class TeamSfPage extends Page {
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

  // Description


  /* ACTIONS */
  get takeActualTeamName() {
    return this.actualTeamName.getText();
  }

  get takeActualParentTeam() {
    return (ArrayOperationsComponent.oneVisible(this.actualParentTeam)).getText();
  }
}

export default new TeamSfPage();
