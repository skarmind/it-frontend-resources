# itwa-design-tokens

## Подключение стилей в проект

JavaScript объект с данными: `import ... from "itwa-design-tokens"`

CSS переменные, хэлперы и шрифты: `import "itwa-design-tokens/dist/style/props.min.css"`

## Project setup
#### Установка зависимостей
```
npm install
```

#### Компиляция стилей в папку src/style
```
npm run build
```

#### Компиляция Javascript переменных в подключаемый модуль, обработка стилей из папки src/style с помощью POSTCSS и их перемещение
```
npm run bundle
```

#### Запуск live сервера для отладки стилей из папки dist (в разработке)
```
npm run live
```

#### Тестирование (в разработке)
```
npm run test
```