// For short testing purposes
import DataProviderComponent from '../pages/utils/data-provider.component';
import TeamsSfPage from '../pages/teams-sf.page';
import Page from '../pages/page';

describe('Add Post Code to the Territory', function() {
  it('should be!!', function() {
    console.log('\n-----\n' +
        DataProviderComponent.randomParentTeamName +
        '\n-----\n');
  });

  it('should be1!!', function() {
    console.log('===' + TeamsSfPage.appTitle + '===');
    console.log('===' + Page.WAITING_MEDIUM + '===');
  });
});
