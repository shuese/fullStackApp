
import shortData from '../../fixtures/normalData';

describe('Pаполняем форму, просто для того, чтобы не вводить вручную данные', () => {
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
  it('нажимаем кнопку отправить', () => {
    cy.get('button').click({ force: true });
  })
})