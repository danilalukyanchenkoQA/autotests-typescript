
describe('Первый тест на TypeScript', (): void => {
  it('Должен открыть главную страницу', (): void => {
    cy.visit('http://localhost:3000/login');
    cy.contains('Welcome to Grafana').should('be.visible');
  });
});