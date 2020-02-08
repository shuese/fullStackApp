describe('Тест валидации формы', () => {
  it('логи', () => {
    cy.visit('http://localhost:3000/signup');
    cy.get('input[name=firstName]').type('Hello, World');
    cy.get('input[name=lastName]').type('Hello, World');
    cy.get('input[name=email]').type('a@a.ru');
    cy.get('input[name=nickName]').type('Hello, World');
    cy.get('input[name=type]').type('developer');
    cy.get('input[name=race]');
    cy.get('input[name=password]').type('Hello, World');
    cy.get('button');
  })
})