describe("Pаполняем форму, просто для того, чтобы не вводить вручную данные", () => {
  it("Переход на нужную страницу", () => {
    cy.visit("http://localhost:3000/signup");
  });
  it("звполняем форму ", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("input[name=firstName]").type("=/=/=/=/=/=/=/=/=/=/");
    cy.get("input[name=lastName]").type("=/=/=/=/=/=/=/=/=/=/");
    cy.get("input[name=email]").type("kek@kek.ru");
    cy.get("input[name=nickName]").type("=/=/=/=/=/=/=/=/=/=/");
    cy.get('[class*="-control"]')
      .click(0, 0, { force: true })
      .get('[class*="-menu"]')
      .find('[class*="-option"]')
      .eq(0)
      .click(0, 0, { force: true });
    cy.get(".react-switch-bg").click();
    cy.get("input[name=password]").type("=/=/=/=/=/=/=/=/=/=/");
  });
  it("нажимаем кнопку отправить", () => {
    cy.get("button").click({ force: true });
  });
});
