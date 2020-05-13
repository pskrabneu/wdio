// Common elements for all pages
const nineDotsBtn = '//div[@class="slds-icon-waffle"]';
const searchAppsFld = '//input[@type="search"][@placeholder="Search apps and items..."]';
const waitings = {
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

  // open a page
  openPage(pageObject, pageTitle) {
    console.log('<---Common Actions Component--->');
    browser.pause(waitings.BIG);
    const pageTitleLinks = '//p[@class="slds-truncate"]/b[text()="' + pageTitle + '"]/../..';
    this.clickNineDots(pageObject);
    browser.pause(waitings.MEDIUM);
    browser.$(searchAppsFld).setValue(pageTitle);
    browser.pause(waitings.BIG);
    const linksArray = browser.$$(pageTitleLinks);
    console.log('Size links = ' + linksArray.length);

    for (let sz = 0; sz < linksArray.length; sz++) {
      const linkText = linksArray[sz].getText();
      if (linkText === pageTitle) {
        linksArray[sz].click();
      }
    }
    browser.pause(waitings.MEDIUM);
    return pageObject;
  }
}

export default new CommonActionsComponent();
