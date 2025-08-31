
describe('Страница авторизации', (): void => {

  it('Открытие страницы авторизации', (): void => {
    cy.visit('/login'); 
    cy.contains('Welcome to Grafana').should('be.visible');
  });

  it('Проверка на введенный в строку текст', (): void => {
    cy.visit('/login');
    cy.contains('Welcome to Grafana').should('be.visible');
    cy.get('input[name="user"]').type('your_username@example.com').should('have.value', 'your_username@example.com')
    cy.get('input[name="password"]').type('your_password')
    cy.get('button[aria-label="Show password"]').click()
    cy.get('input[name="password"]').should('have.value', 'your_password')
  });

  it('Вход с невалидным логином и паролем', (): void => {
    cy.visit('/login');
    cy.contains('Welcome to Grafana').should('be.visible')
    cy.get('input[name="user"]').type('your_username@example.com')
    cy.get('input[name="password"]').type('your_password')
    cy.get('[data-testid="data-testid Login button"]').click()
    cy.contains('Invalid username or password')
  });

    it('Незаполнены обязательные поля', (): void => {
    cy.visit('/login');
    cy.contains('Welcome to Grafana').should('be.visible')
    cy.get('[data-testid="data-testid Login button"]').click()
    cy.contains('Password is required')
    cy.contains('Email or username is required')
  });

  
  
});