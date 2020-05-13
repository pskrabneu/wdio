/* PAGES IMPORT */
import LoginSfPage from '../login-sf.page';

// Common elements for all pages
const nineDotsBtn = '//div[@class="slds-icon-waffle"]';
const searchAppsFld = '//input[@type="search"][@placeholder="Search apps and items..."]';

// Waiting
const waiting = {
  BIG: 8000,
  MEDIUM: 5000,
  SMALL: 2000,
};

class CommonActionsComponent {
  // click on 9dots
  clickNineDots(pageObject) {
    browser.$(nineDotsBtn).click();
    return pageObject;
  }

  // open a page with the help of 9dots
  openPage(pageObject, pageTitle) {
    console.log('<---Common Actions Component--->');
    browser.pause(waiting.BIG);
    const pageTitleLinks = '//p[@class="slds-truncate"]/b[text()="' + pageTitle + '"]/../..';
    this.clickNineDots(pageObject);
    browser.pause(waiting.MEDIUM);
    browser.$(searchAppsFld).setValue(pageTitle);
    browser.pause(waiting.BIG);
    const linksArray = browser.$$(pageTitleLinks);

    for (let sz = 0; sz < linksArray.length; sz++) {
      const linkText = linksArray[sz].getText();
      if (linkText === pageTitle) {
        linksArray[sz].click();
      }
    }
    browser.pause(waiting.MEDIUM);
    return pageObject;
  }
}

export default new CommonActionsComponent();
