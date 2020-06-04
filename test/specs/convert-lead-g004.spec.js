import { describe } from 'mocha';

/* PAGES IMPORT */
import LoginSfPage from '../pages/login-sf.page';
import LeadsSfPage from '../pages/leads-sf.page';

/* COMMON COMPONENTS IMPORT */
import DataProviderComponent from '../pages/utils/data-provider.component';
import CommonActionsComponent from '../pages/utils/common-actions.component';

/* CONSTANTS USED WITHIN THE TEST */
const tradingName = DataProviderComponent.randomCompanyName +
  ' TN' +
  DataProviderComponent.randomNumber +
  DataProviderComponent.randomLetter;

const lastName = DataProviderComponent.randomLastName +
  ' LN' + DataProviderComponent.randomNumber;

const postCode = DataProviderComponent.randomPostCode;

const eMail = DataProviderComponent.randomEmail;

describe('G003 - Create Lead:', function() {
  it('should open "Leads" tab', function() {

  });

  it('should press "New" button and open web-form', function() {

  });

  it('should populate all required fields and press "Save" button,' +
    ' no errors displayed', function() {

  });

  it('should open created "Lead" with fields defined earlier,' +
    ' no errors displayed', function() {



  });
});
