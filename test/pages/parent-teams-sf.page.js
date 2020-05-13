// 'Parent Teams' tab page (parent-teams-sf.page.js)
import Page from './page';
import ArrayOperationsComponent from './utils/array-operations.component';

class ParentTeamsSfPage extends Page {
  // variables on ParentTeamsSfPage
  appName;

  // variables on 'New Parent Team' web-form
  parentTeamName;
  salesRegion;
  description;

  /* ELEMENTS */
  /* 'Parent Teams' page */
  get tabName() {
    return $('//ol/li/span[text()="' + this.appName + '"]');
  }

  get newBtn() {
    return $$('//ul/li/a[@title="New"][@role="button"]');
  }

  /* 'New Parent Team' web-form */
  get newParentTeamWfTitle() {
    return $('//article/h2');
  }

  get parentTeamNameWf() {
    return $$('//div[@class="slds-form slds-form_stacked slds-is-editing"]')[0].
        $('//span[text()="Parent Team Name"]/../../input');
  }

  get salesRegionWf() {
    return $$('//div[@class="slds-form slds-form_stacked slds-is-editing"]')[0].
        $('//span[text()="Sales Region"]/../..//input');
  }

  get descriptionWf() {
    return $$('//div[@class="slds-form slds-form_stacked slds-is-editing"]')[0].
        $('//span[text()="Description"]/../..//input');
  }

  get salesRegionItemWf() {
    return $$('//li[@class="lookup__item  default uiAutocompleteOption' +
        ' forceSearchInputLookupDesktopOption"]')[0];
  }

  get saveBtn() {
    return $$('//div[@class="actionsContainer"]/div/button')[2];
  }

  get parentTeamName() {
    return $$('//slot/*[text()="' + this.parentTeamName + '"]')[1];
  }

  /* ACTIONS */
  get clickNewBtn() {
    ArrayOperationsComponent.oneVisible(this.newBtn).click();
    browser.pause(3000);
    return ParentTeamsSfPage;
  }

  get inputParentTeamNameWf() {
    this.parentTeamNameWf.setValue(this.parentTeamName);
  }

  get inputSalesRegionWf() {
    this.salesRegionWf.setValue(this.salesRegion);
    browser.pause(5000);
    return ParentTeamsSfPage;
  }

  get selectSalesRegionItemWf() {
    this.salesRegionItemWf.click();
  }

  get inputDescriptionWf() {
    this.descriptionWf.setValue(this.description);
  }

  get clickSaveBtn() {
    this.saveBtn.click();
    return ParentTeamsSfPage;
  }
}

export default new ParentTeamsSfPage();


