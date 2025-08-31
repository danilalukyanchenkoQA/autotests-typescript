Проект автотестов на TypeScript с Cypress и Mocha Awesome
📋 Описание
Проект предоставляет инфраструктуру для написания и выполнения автоматизированных end-to-end тестов на TypeScript с использованием фреймворка Cypress. Включает интегрированную систему генерации детальных отчетов о выполнении тестов через Mocha Awesome.

🛠 Предварительные требования
Перед началом работы убедитесь, что на вашей системе установлено:

Node.js версии 16 или выше

npm или yarn (менеджер пакетов)

Один из поддерживаемых браузеров:

Chrome

Firefox

Edge

Electron

📥 Установка
Клонирование репозитория

bash
git clone <адрес-репозитория>
cd autotests-typescript
Установка зависимостей

bash
npm install
Установка Cypress и Mocha Awesome (если не установлены)

bash
npm install cypress mochawesome mochawesome-merge mochawesome-report-generator --save-dev
📁 Структура проекта
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
⚙️ Настройка
Настройка базового URL в cypress.config.ts:

typescript
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Укажите URL вашего приложения
    specPattern: 'cypress/e2e/**/*.spec.ts',
    // Дополнительные настройки...
  },
});
Настройка переменных окружения (опционально) в cypress.env.json:

json
{
  "adminEmail": "your-email@example.com",
  "adminPassword": "your-password"
}
🚀 Запуск тестов
Интерактивный режим (Cypress Test Runner)
bash
npm run cypress:open
Headless-режим (командная строка)
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
📊 Генерация отчетов Mocha Awesome
Запуск тестов с генерацией отчетов
bash
npm run test:report
Объединение отчетов
bash
npm run merge-reports
Генерация HTML отчета
bash
npm run generate-report
Полный процесс (запуск + объединение + генерация)
bash
npm run test:full-report
После выполнения отчеты будут доступны в папке cypress/reports/. Откройте cypress/reports/report.html в браузере для просмотра детальных результатов.

✍️ Написание тестов
Создавайте новые тесты в директории cypress/e2e с расширением .spec.ts.

Пример теста:

typescript
describe('Пример тестового сценария', (): void => {
  it('должен выполнить определенное действие', (): void => {
    cy.visit('/page');
    cy.get('[data-testid="element"]').should('be.visible');
  });
});
💡 Полезные команды
npm run build - Компиляция TypeScript кода

npm run lint - Проверка кода с помощью ESLint

npm run lint:fix - Автоматическое исправление ошибок линтера

🔧 Решение проблем
Ошибка: "Can't run because no spec files were found"
Убедитесь, что:

Тестовые файлы имеют расширение .spec.ts

Файлы находятся в директории cypress/e2e/

В cypress.config.ts указан правильный specPattern

Ошибка: "ECONNREFUSED 127.0.0.1:3000"
Убедитесь, что:

Ваше приложение запущено на указанном порту

Базовый URL в конфигурации корректен

📚 Дополнительная информация
Документация Cypress

Документация Mocha Awesome

TypeScript Handbook

Руководство по написанию хороших тестов

🤝 Поддержка
Если у вас возникли вопросы или проблемы, создайте issue в репозитории проекта или обратитесь к разработчикам.

