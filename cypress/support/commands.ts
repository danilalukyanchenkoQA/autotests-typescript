// cypress/support/commands.ts
declare global {
  namespace Cypress {
    interface Chainable {
      // Здесь вы можете добавить кастомные команды
      login(email: string, password: string): Chainable<void>;
    }
  }
}

// Пример кастомной команды
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password);
  cy.get('[data-testid="submit"]').click();
});

export {};