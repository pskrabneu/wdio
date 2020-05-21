// Territories Page (territories-sf.page)
import Page from './page';
import ArrayOperationsComponent from './utils/array-operations.component';

class TerritoriesSfPage extends Page {
  /* CONSTANTS */
  constructor() {
    super();
    this.appTitle = 'Territories';
    this.pageTitle = 'Territories';
    this.webForm = 'New Territory';
  }

  /* ELEMENTS */
  /* 'Territory' page */
  expectedAppName;

  /* 'New Territory' web-form */
  territoryName;

  /* 'New Postcode' web-form */
  postCode;
  postCodeDescription;

  get actualAppName() {return $$('//div[@class="slds-grid"]//nav[@aria-label="Breadcrumbs"]' +
    '/ol/li/span');}
  get newButton() {return $$('//*[text()="New"]/../../a[@title="New"]');}
  get titleNewTerritoryForm() {return $('//article/*[text()="New Territory"]');}
  get relatedTab() {return $('//ul[@class="slds-tabs_default__nav"]/li[@title="Related"]');}
  get detailsTab() {return $('//ul[@class="slds-tabs_default__nav"]/li[@title="Details"]');}
  get newBtnRT() {return $('//div[@class="actionsContainer"]/ul/li');}
  get postcodeNameRT() {return $$('//div[@class="slds-form slds-form_stacked slds-is-editing"]' +
      '/div/div/div')[0].$('label.label');}

  get postcodeDescriptionRT() {return $$('//div[@class="slds-form slds-form_stacked' +
      ' slds-is-editing"]/div/div/div')[2].$('label.label');}

  get saveBtnRT() {return $('button.slds-button.slds-button--neutral.uiButton--brand.uiButton.' +
      'forceActionButton');}

  // Click on 'Related' Tab
  get clickOnRT() {
    this.relatedTab.click();
    return TerritoriesSfPage;
  }

  // Click on 'Details' Tab
  get clickOnDT() {
    this.detailsTab.click();
    return TerritoriesSfPage;
  }

  // Click on 'New' button on 'Related' Tab
  get clickOnNewBtnRT() {
    this.newBtnRT.click();
    return TerritoriesSfPage;
  }

  // Fill in the 'Postcode Name'
  get inputPostcode() {
    this.postcodeNameRT.setValue(this.postCode);
  }

  // Fill in the 'Description'
  get inputDescription() {
    this.postcodeDescriptionRT.setValue(this.postCodeDescription);
  }

  // Click on 'Save' button on 'Related' Tab -> 'New Postcode' form
  get clickSaveBtnRT() {
    this.saveBtnRT.click();
    return TerritoriesSfPage;
  }

  get territoryNameInput() {return $('//article/div/div[contains(@class, \'forceRecordLayout\')]').
      shadow$$('input')[0];}

  get saveBtn() {return $('//button[@title=\'Save\']');}


  /* ACTIONS */
  get takeActualAppNameTitle() {
    return ArrayOperationsComponent.oneVisible(this.actualAppName).getText();
  }

  get clickNewTerritory() {
    this.newButton.click();
    return TerritoriesSfPage;
  }

  get inputTerritory() {
    this.territoryNameInput.setValue(this.territoryName);
  }

  get clickSaveBtn() {
    this.saveBtn.click();
    return TerritoriesSfPage;
  }
}

export default new TerritoriesSfPage();

