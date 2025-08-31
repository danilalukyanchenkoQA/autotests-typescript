import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // укажите ваш базовый URL
    viewportWidth: 1920, // ширина окна браузера
    viewportHeight: 1080, // высота окна браузера
    defaultCommandTimeout: 10000, // таймаут для команд
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.spec.ts',
  },
  video: true, // запись видео тестов
  screenshotOnRunFailure: true, // автоматические скриншоты при падении тестов
});