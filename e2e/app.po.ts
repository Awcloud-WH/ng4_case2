import { browser, element, by } from 'protractor';

export class Ng4app2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-app-root h1')).getText();
  }
}
