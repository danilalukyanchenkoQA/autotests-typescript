// cypress/support/e2e.ts
import './commands';

// Обработчик для непойманных исключений
Cypress.on('uncaught:exception', (err) => {
  console.error('Uncaught exception:', err);
  return false;
});