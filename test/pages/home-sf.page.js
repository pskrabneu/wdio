// Home Page (home-sf.page)
import Page from './page';
import TerritoriesSfPage from './territories-sf.page';
import ParentTeamsSfPage from './parent-teams-sf.page';

const territoriesTabName = 'Territories';
const parentTeamsTabName = 'Parent Teams';

class HomeSfPage extends Page {
  get actualPageTitle() {return $('title').getText();}
  get inputSearchApps() {return $('//input[@type="search"]' +
    '[@placeholder="Search apps and items..."]');}

  get territoriesTabLink() {return $('//b[text()="Territories"]');}
  get parentTeamsTabLink() {return $('//b[text()="Parent Teams"]');}

  get clickAppLauncherDots() {
    const nineDots = browser.$('//div[@class="slds-icon-waffle"]');
    nineDots.click();
    browser.pause(Page.WAITING_BIG);
    return HomeSfPage;
  }

  get inputTerritoriesTabName() {
    this.inputSearchApps.setValue(territoriesTabName);
    return HomeSfPage;
  }

  /* OPEN PAGES */
  get openTerritoriesPage() {
    this.territoriesTabLink.click();
    return TerritoriesSfPage;
  }

  get openTeamsPage() {

  }

  get inputParentTeamsTabName() {
    this.inputSearchApps.setValue(parentTeamsTabName);
    browser.pause(1000);
    return HomeSfPage;
  }

  get openParentTeamsPage() {
    this.parentTeamsTabLink.click();
    return ParentTeamsSfPage;
  }
}

export default new HomeSfPage();


