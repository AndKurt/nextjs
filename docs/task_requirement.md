# Tестовое задание Modsen ProperLand

## Содержание

-   [Техническое задание](#Техническое-задание)
-   [Используемые технологии](#Используемые-технологии)
-   [Необходимый функционал](#Необходимый-функционал)
-   [Дополнительный функционал](#Дополнительный-функционал)
-   [Описание экранов](#Описание-экранов)
-   [Тестирование](#Тестирование)
-   [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать React приложение "Modsen ProperLand" по предоставленному дизайну из Figma
с использование server-side rendering(NextJS).

## Используемые технологии

-   **_yarn_** - менеджер пакетов;
-   **_TS_** - инструмент строгой типизации;
-   **_email-js_** - библиотека позволяющая отправлять электронные письма на почту;
-   **_styled-components_** - система стилизации react компонентов;
-   **_cypress_** — e2e тестирование для web-приложений;
-   **_yup_** - библиотека для валидации форм;
-   **_nextJS_** - фреймворк на JavaScript, использующий React для построения server-side render.

## Необходимый функционал:

Приложение должно предоставлять возможность:

-   отправки писем на электронную почту;
-   смены языка (продумать самостоятельно).

### Пример графического представления:

Ссылка на макет: [Макет "Modsen ProperLand"](https://www.figma.com/file/rRRzmjzFZO6ayCDYePVUBL/Modsen-ProperLand?type=design&node-id=0-1&t=WBhJtdv34pBS8gVx-0).

### Также проект предполагает:

-   Организацию файловой структуры описанной в [structure](https://github.com/mkrivel/structure);
-   Сборку проекта с нуля(с настройками всех конфигов: eslint, prettier, husky + pre-commit);
-   Обработку ошибок через паттерн _"Error Boundaries"_;
-   Использование TypeScript для типизирования и уменьшения количества потенциальных багов;
-   Использование алиасов для импортирования файлов;
-   Реализация должна быть выполнена без использования UI библиотек;
-   Обязательная валидация всех текстовых полей с использованием _yup_;
-   Оптимизацию дизайна под мобильные устройства;
-   Покрытие тестами всего приложения (cypress);
-   Проверку оптимизации приложения;
-   Обязательный deploy приложения;
-   Обязательную анимацию при наведения, нажатии на кнопки, прокрутки карусели и слайдеров, появлении элементов на странице при рендере и скролле;
-   Творчество в контексте анимации, помимо обязательной выше, приветствуется.

## Описание экранов

Каждая страница содержит в шапке профиля навигацию по страницам сайта, а также в подвале сайта
должна быть реализована форма отправки сообщения на электронную почту выполняющего, все ссылки должны быть валидные.

1. [Главная Home](https://www.figma.com/file/rRRzmjzFZO6ayCDYePVUBL/Modsen-ProperLand?type=design&node-id=1-4461&t=CBu5MKi5NzZvE9iY-0).
   В блоке "Buying & Selling Property..." при нажатии на кнопку плеера начинает проигрываться видео, также можно его поставить на паузу.
   В блоке "Properties for sale..." отображаются список квартир, выставленных на продажу.
   В блоке "What our customers say about us" реализован слайдер, который должен корректно работать на мобильных устройствах и быть универсальным для любого количества отображаемых слайдов.

2. [Главная About](https://www.figma.com/file/rRRzmjzFZO6ayCDYePVUBL/Modsen-ProperLand?type=design&node-id=1-3970&t=CBu5MKi5NzZvE9iY-0).
   В блоке "We're reinventing the space" реализация видео должна быть такая же как на главной странице.

3. [Главная Services](https://www.figma.com/file/rRRzmjzFZO6ayCDYePVUBL/Modsen-ProperLand?type=design&node-id=1-1507&t=CBu5MKi5NzZvE9iY-0)

4. [Главная Error](https://www.figma.com/file/rRRzmjzFZO6ayCDYePVUBL/Modsen-ProperLand?type=design&node-id=1-426&t=CBu5MKi5NzZvE9iY-0)

Пользователь попадает на страницу в случае неправильного ввода путь в адресной строке.

## Тестирование

Реализовать e2e тестирование c полным покрытием функционала приложения:

-   Модуль навигации;
-   Модуль смены языка;
-   Модуль отправки сообщений.

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[NextJS](https://nextjs.org/docs)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[Next-i18next](https://github.com/i18next/next-i18next)

[Styled-components](https://www.styled-components.com/docs)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Email-js](https://www.emailjs.com/docs/examples/reactjs/)

[Yup](https://www.npmjs.com/package/yup)

[Commits convetional](https://www.conventionalcommits.org/en/v1.0.0/#specification)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)
