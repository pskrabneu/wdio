// Login Page (login-sf.page)
import Page from './page';
import HomeSfPage from './home-sf.page';

class LoginSfPage extends Page {
  get usernameInput() {return $('#username');}
  get passwordInput() {return $('#password');}
  get submitBtn() {return $('#Login');}

  open(path) {
    super.open('https://test.salesforce.com/');
    return this;
  }

  submit() {
    this.submitBtn.click();
    return HomeSfPage;
  }
}

export default new LoginSfPage();
