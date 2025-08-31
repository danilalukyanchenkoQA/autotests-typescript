Проект автотестов на TypeScript с Cypress и Mocha Awesome
Описание
Этот проект содержит автоматизированные тесты на TypeScript с использованием фреймворка Cypress. Включает настройку для генерации подробных отчетов о выполнении тестов с помощью Mocha Awesome.

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
Установите Cypress и Mocha Awesome (если не установлены):

bash
npm install cypress mochawesome mochawesome-merge mochawesome-report-generator --save-dev
Структура проекта
text
autotests-typescript/
├── cypress/
│   ├── e2e/                 # Директория с тестами
│   │   └── *.spec.ts        # Файлы тестов (используется расширение .spec.ts)
│   ├── fixtures/            # Фикстуры (тестовые данные)
│   └── support/             # Поддерживающие файлы
│       ├── commands.ts      # Пользовательские команды
│       └── e2e.ts           # Поддержка e2e тестов
├── cypress.config.ts        # Конфигурация Cypress
├── tsconfig.json           # Конфигурация TypeScript
└── package.json            # Зависимости и скрипты проекта
Настройка
Настройте базовый URL вашего приложения в файле cypress.config.ts:

typescript
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // замените на URL вашего приложения
    specPattern: 'cypress/e2e/**/*.spec.ts', // путь к spec-файлам
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
Запуск с генерацией отчетов Mocha Awesome
bash
# Запуск тестов с генерацией отчетов
npm run test:report

# Объединение отчетов (если нужно)
npm run merge-reports

# Генерация HTML отчета
npm run generate-report

# Полный процесс: запуск тестов + объединение + генерация отчета
npm run test:full-report
Запуск конкретного теста
bash
npx cypress run --spec "cypress/e2e/your-test.spec.ts"
Генерация отчетов
Проект настроен для генерации отчетов с помощью Mocha Awesome. После запуска тестов с генерацией отчетов:

Отчеты сохраняются в папку cypress/reports/

JSON файлы содержат сырые данные о выполнении тестов

HTML файлы содержат визуальное представление отчетов

Для просмотра отчета откройте файл cypress/reports/report.html в браузере

Написание тестов
Создавайте новые тесты в директории cypress/e2e с расширением .spec.ts.


