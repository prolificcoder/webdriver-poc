// var assert = require('assert');
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

          //Is the sorting required?
          //No other selector is working :(
        // browser.click('//*[@id="tblSearchResults"]/table/tbody/tr[3]/td/table/tbody/tr[1]/td[10]/b/u')
        // browser.click('//*[@id="tblSearchResults"]/table/tbody/tr[3]/td/table/tbody/tr[1]/td[10]/b/u')


        var rows = browser.elements('//tr[@id[starts-with(.,"s_tr1_")]]')
        var idRows = rows.getAttribute(('id'));
        var validRows =[];

        for(var i=0; i<idRows.length; i++){
          //Some invalid rows are ending with f
          if(idRows[i].slice(-1) != 'f')
          {
            validRows.push(idRows[i].split("_")[2]);
          }
        }
        console.log(validRows);
    });
});
//
