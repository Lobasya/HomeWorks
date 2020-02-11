# WebPack Config Flow

## Basic setup

1.Создаем папку
```bash
mkdir my-project
```
2.Заходим в созданную папку
```bash
cd my-project
```
3.Инитим наш проект
```bash
npm init -y
```
4.Устанавливаем модули [webpack](https://webpack.js.org/) и [webpack-cli](https://www.npmjs.com/package/webpack-cli) в наш проект 
(--save-dev сохраняет модули в package.json в поле devDependencies)
```bash
npm install webpack webpack-cli --save-dev
```

### Создаем структуру проекта

```bash
 my-project
  |- package.json
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

Наш src/index.html
```angular2html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My project</title>
</head>
<body>
   <script src="main.js"></script>
</body>
</html>
```

Наш /src/index.js
```js
document.body.innerHTML += '<h1>My project was build</h1>';
```

### Запускаем билд
```bash
npx webpack
```

### Открываем файл /dist/index.html в браузере

Откройте index.html в вашем браузере и, если все прошло нормально, вы должны увидеть следующий текст: 'My project was build'

----------------------------------------------------------------------------------

# Modules 

### Добавляем в вашу структуру проекта файл webpack.config.js

```bash
  my-project
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

My webpack.config.js

```js
const path = require('path'); /// подключаем модуль файловой системы

module.exports = {
  entry: './src/index.js', /// указываем файл вхождения
  output: {
    filename: 'main.js', /// указываем название сбилженого файла
    path: path.resolve(__dirname, 'dist'), /// указываем директорию куда положим сбилженый js
  },
};
```

### Заупускаем билд с помощью конфига webpack.config.js

```bash
npx webpack --config webpack.config.js
```

### Открываем файл /dist/index.html в браузере

Откройте index.html в вашем браузере и, если все прошло нормально, вы должны увидеть следующий текст: 'My project was build'

-------------------------------------------------------------------------------

# Npm scripts

1.Добавляем скрипт в package.json

```bash
   {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
        "build": "webpack --config webpack.config.js" /// наш скрипт
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.20.2",
      "webpack-cli": "^3.1.2"
    },
    "dependencies": {
      "lodash": "^4.17.5"
    }
  }
```

2.Заупускаем команду в терминале

```bash
npm run build
```

### Открываем файл /dist/index.html в браузере

Откройте index.html в вашем браузере и, если все прошло нормально, вы должны увидеть следующий текст: 'My project was build'


--------------------------------------------------------

# Loading CSS

Чтобы ```import``` файл CSS из модуля JavaScript,
вам нужно установить и добавить [style-loader](https://webpack.js.org/loaders/style-loader/)
и [css-loader](https://webpack.js.org/loaders/css-loader/) в вашу ```module``` конфигурацию:

1.Устанавливаем модули style-loader and css-loader

```bash
npm install --save-dev style-loader css-loader
```

2.Добавляем конфиг в файл webpack.config.js
```js
 const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
   module: {
     rules: [
       {
         test: /\.css$/, /// регулярное выражение ищущее css фалы
         use: [
           // Создаем узлы `style` из строк JS
          'style-loader',
          // Переводит CSS в CommonJS
          'css-loader',
        ],
       },
     ],
   },
  };
```

3.Просто ```import``` ваш css в ```index.js``` файл

* Структура проекта
```bash
 my-project
  |- package.json
  |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
+   |- style.css
    |- index.js
  |- /node_modules
```

* Структура src/style.css
```css
h1 {
    color: red;
}
```

* Структура src/index.js
```js
import './style.css'
document.body.innerHTML += '<h1>My project was build</h1>';
```

4.Запускаем билд
```bash
npm run build
```
### Открываем файл /dist/index.html в браузере

Откройте index.html в вашем браузере и, если все прошло нормально, вы должны увидеть следующий текст: 'My project was build'

-------------------------------------------------------------------------------------

# Loading SASS and SCSS
Чтобы импортировать файл SASS или SCSS из модуля JavaScript.

1.Устанавливаем модули style-loader, css-loader, sass-loader and node-sass

```bash
npm install --save-dev style-loader css-loader sass-loader node-sass
```

2.Добавляем конфиг webpack.config.js
```js
 const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
   module: {
     rules: [
      {
        test: /\.s[ac]ss$/i,/// регулярное выражение ищущее css, scss, sass фалы
        use: [
          // Создаем узлы `style` из строк JS
          'style-loader',
          // Переводит CSS в CommonJS
          'css-loader',
          // Компилируем Sass в CSS
          'sass-loader',
        ],
      },
     ],
   },
  };
```

3.Просто импортируем scss или sass и ```index.js``` файл

* Структура проекта
```bash
 my-project
  |- package.json
  |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
+   |- style.scss
    |- index.js
  |- /node_modules
```

* Структура src/style.scss
```scss
$red-color: red;

h1 {
  color: $red-color;
}
```

* Структура src/index.js
```js
import './style.scss' /// тут мы импортируем наш файл со стилем
document.body.innerHTML += '<h1>My project was build</h1>';
```

4.Запускаем билд
```bash
npm run build
```
### Открываем файл /dist/index.html в браузере

Откройте index.html в вашем браузере и, если все прошло нормально, вы должны увидеть следующий текст: 'My project was build'


-------------------------------------------------------------------------------------

# Webpack Dev Server

Используем Webpack с сервером разработки, который обеспечивает перезагрузку в режиме реального времени.
Это следует использовать только для разработки.
Он использует [webpack-dev-middleware] (https://github.com/webpack/webpack-dev-middleware)
под капотом, который обеспечивает быстрый доступ в оперативной памяти к ресурсам webpack.

1.Устанавливаем модуль [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
```bash
npm install webpack-dev-server --save-dev
```

2.Добавляем скрипт package.json
```json
"scripts": {
  "start": "webpack-dev-server --config webpack.config.js",
  "build": "webpack --config webpack.config.js"
},
```

3.Добавляем конфиг webpack.config.js
```js
 const path = require('path');

  module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'), /// Смотреть эту директорию
        port: 3000, // Порт на котором будем слушать (по дефолту 8080)
        open: true, // Открывать автоматически в браузере или нет
      },
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
      },
     ],
   },
  };
```

4.Запускаем в терминале ```npm run start```

## Enjoy 😃

-------------------------------------------------------------------------------------

# Ссылки по Webpack 
* [Оффициальный сайт](https://webpack.js.org/)
* [Введение в Webpack для новичков](https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-webpack-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2-6cafbf562386)
