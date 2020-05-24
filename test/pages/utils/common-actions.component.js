/* PAGES IMPORT */
import Page from '../page';



// Common elements for all pages
const nineDotsBtn = '//div[@class="slds-icon-waffle"]';
const searchAppsFld = '//input[@type="search"][@placeholder="Search apps and items..."]';

class CommonActionsComponent {
  // click on 9dots
  clickNineDots(pageObject) {
    browser.$(nineDotsBtn).click();
    return pageObject;
  }

  // open a page with the help of 9dots
  openPage(pageObject, pageTitle) {
    browser.pause(Page.WAITING_BIG);
    const pageTitleLinks = '//p[@class="slds-truncate"]/b[text()="' + pageTitle + '"]/../..';
    this.clickNineDots(pageObject);
    browser.pause(Page.WAITING_MEDIUM);
    browser.$(searchAppsFld).setValue(pageTitle);
    browser.pause(Page.WAITING_BIG);
    const linksArray = browser.$$(pageTitleLinks);

    for (let sz = 0; sz < linksArray.length; sz++) {
      const linkText = linksArray[sz].getText();
      if (linkText === pageTitle) {
        linksArray[sz].click();
      }
    }
    browser.pause(Page.WAITING_BIG);
    return pageObject;
  }
}

export default new CommonActionsComponent();
