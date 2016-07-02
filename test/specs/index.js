var assert = require('assert');
describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('/');
        var title = browser.getTitle();
        var selectBox = browser.element('#ddlPredefinedSelect');
        console.log(selectBox.getValue());

          selectBox.selectByVisibleText('Expiring');
          console.log(selectBox.getText('option:checked'));

          browser.waitUntil(function () {
            return browser.isVisible('#divOverlaySRB') === false
          }, 5000, 'expected spinner to away in 5 secs');
        var timeLeft = browser.getText('*=Time Left');
          console.log('is element found' + timeLeft.isVisible()); 
        browser.click('*=Time Left')
        // console.log(timeLeft.getValue())
        // timeLeft.click();
    });
});
