Проект автотестов на TypeScript с Cypress
Описание
Этот проект содержит автоматизированные тесты на TypeScript с использованием фреймворка Cypress для тестирования веб-приложений.

Предварительные требования
Node.js (версия 16 или выше)

npm или yarn

Браузер (Chrome, Firefox, Edge или Electron)

Установка
Клонируйте репозиторий:

bash
git clone <адрес-репозитория>
cd autotests-typescript
Установите зависимости:

bash
npm install
Установите Cypress (если не установлен):

bash
npm install cypress --save-dev
Настройка
Настройте базовый URL вашего приложения в файле cypress.config.ts:

typescript
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // замените на URL вашего приложения
    // ... остальные настройки
  },
});
При необходимости настройте переменные окружения в файле cypress.env.json:

json
{
  "adminEmail": "your-email@example.com",
  "adminPassword": "your-password"
}
Запуск тестов
Запуск в интерактивном режиме (Cypress Test Runner)
bash
npm run cypress:open
Запуск в headless-режиме (в командной строке)
bash
npm run cypress:run
Запуск в определенном браузере
bash
npm run cypress:run:chrome
# или
npm run cypress:run:firefox
Запуск конкретного теста
bash
npx cypress run --spec "cypress/e2e/your-test.spec.ts"
Структура проекта
text
autotests-typescript/
├── cypress/
│   ├── e2e/                 # Директория с тестами
│   │   └── *.spec.ts        # Файлы тестов
│   ├── fixtures/            # Фикстуры (тестовые данные)
│   └── support/             # Поддерживающие файлы
│       ├── commands.ts      # Пользовательские команды
│       └── e2e.ts           # Поддержка e2e тестов
├── cypress.config.ts        # Конфигурация Cypress
├── tsconfig.json           # Конфигурация TypeScript
└── package.json            # Зависимости и скрипты проекта
Написание тестов
Создавайте новые тесты в директории cypress/e2e с расширением .spec.ts.

Пример теста:

typescript
describe('Мой тестовый сценарий', (): void => {
  it('должен выполнить определенное действие', (): void => {
    cy.visit('/page');
    cy.get('[data-testid="element"]').should('be.visible');
  });
});
Полезные команды
npm run build - Компиляция TypeScript кода

npm run lint - Проверка кода с помощью ESLint

npm run lint:fix - Автоматическое исправление ошибок линтера

Решение проблем
Если возникают проблемы с запуском тестов:

Убедитесь, что все зависимости установлены:

bash
npm ci
Проверьте совместимость версий Node.js и Cypress

Убедитесь, что тестируемое приложение запущено и доступно по URL, указанному в конфигурации