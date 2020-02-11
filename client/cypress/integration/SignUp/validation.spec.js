
import shortData from '../../fixtures/shortData';
import noEmail from '../../fixtures/noEmailData';
import longData from '../../fixtures/longData';

describe('Короткие данные', () => {
  it('Переход на нужную страницу', () => {
    cy.visit('http://localhost:3000/signup');
  })
  it('звполняем форму ', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('input[name=firstName]').type(shortData.firstName);
    cy.get('input[name=lastName]').type(shortData.lastName);
    cy.get('input[name=email]').type(shortData.email);
    cy.get('input[name=nickName]').type(shortData.nickName);
    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .eq(0)
      .click(0, 0, { force: true })
    cy.get('.react-switch-bg').click()
    cy.get('input[name=password]').type(shortData.password);
  })
})

describe('Проверка на почту', () => {
  it('Переход на нужную страницу', () => {
    cy.visit('http://localhost:3000/signup');
  })
  it('мало текста', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('input[name=firstName]').type(noEmail.firstName);
    cy.get('input[name=lastName]').type(noEmail.lastName);
    cy.get('input[name=email]').type(noEmail.email);
    cy.get('input[name=nickName]').type(noEmail.nickName);
    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .eq(0)
      .click(0, 0, { force: true })
    cy.get('.react-switch-bg').click()
    cy.get('input[name=password]').type(noEmail.password);
  })
})

describe('много текста', () => {
  it('Переход на нужную страницу', () => {
    cy.visit('http://localhost:3000/signup');
  })
  it('звполняем форму ', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('input[name=firstName]').type(longData.firstName);
    cy.get('input[name=lastName]').type(longData.lastName);
    cy.get('input[name=email]').type(longData.email);
    cy.get('input[name=nickName]').type(longData.nickName);
    cy
      .get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .eq(0)
      .click(0, 0, { force: true })
    cy.get('.react-switch-bg').click()
    cy.get('input[name=password]').type(longData.password);
  })
})