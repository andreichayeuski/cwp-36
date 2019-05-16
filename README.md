# CWP/TASK/36 - Сборка
function task00() {

Создаем на Github репозиторий cwp-36, клонируем его, открываем в IDE

Копируем файлы из cwp-35

Устанавливаем webpack и gulp

}

function task01() {

Вынесем javascript из public/index.html в scripts/app/ разместив каждый компонент/модель в отдельном файле и связав их с помощью ключевых слов import и export

React и ReactDOM также будем импортировать, поэтому удалим все js-файлы из public

Переместим public/style.css в styles/app.css

}

function task02() {

С помощью webpack и gulp настроим процесс сборки

Для JS:

1. Компоновать javascript нашего todo-приложения в один файл (обрабатывать import/export)

2. Компилировать JSX в JS

3. Компилировать ES6+ в ES5 с добавлением babel polyfill

4. Сторонние библиотеки (React, ReactDOM, axios, ...) выделять в отдельный файл vendor.js

5. Минифицировать JS 

6. Сохранять итоговые файлы как public/app.js и public/vendor.js

Для CSS:

1. Модифицировать с помощью autoprefixer

2. Минифицировать с помощью csso

3. Сохранять итоговый файл как public/app.css

}

function task03() {

С помощью gulp добавим задачи, которые отслеживают изменения в js и css файлах и запускают сборку

Добавим к этим задачам горячее обновление через browsersync

}