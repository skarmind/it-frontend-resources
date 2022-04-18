# ЭТАП 1. Создание CSS переменных

За генерацию css переменных отвечает скрипт props.js, расположенный в папке build. Этот скрипт импортирует JS модули исходников и создает на их основе несколько объектов сборки. Есть 3 вида объектов, на основе которых генерируются файлы с различными селекторами.

#### Объект темной цветовой схемы

```javascript
const darkBundle = {
  "props.colors.dark.css": DarkColors.default,
  ...
};
```

Результат:

```css
[color-scheme='dark']{
    color-scheme: dark;
    ...
}
```

#### &#x20;Объект светлой цветовой схемы

```javascript
const lightBundle = {
  "props.colors.light.css": LightColors.default,
  ...
};
```

Результат:

```css
:root{
    color-scheme: light;
    ...
}
```

#### &#x20;Объект независимых от цветовой схемы элементов:

```javascript
const otherBundle = {
  "props.breakpoints.css": Breakpoints,
  ...
};
```

Результат:

```css
:root{
    ...
}
```



В конце своей работы скрипт props.js создает файл index.css, в котором импортирует все файлы, имена которых прописаны в ключах объектов сборки, а так же css файл подключения шрифтов.

Для добавления дополнительного элемента дизайн-системы, нужно:

1. Создать файл props.{element}.js либо файлы props.{element}.light.js и props.{element}.dark.js, если переменные имеют 2 варианта в зависимости от цветовой схемы.
2. Импортировать этот файл(ы) в скрипте props.js, добавить их в объект otherBundle, либо в объекты lightBundle и darkBundle. Также добавить их в виде строки импорта файлы index.css.&#x20;
3. Запустить скрипт генерации файлов с помощью команды `npm run build`

&#x20;Пример добавления элемента дизайн-системы в скрипте props.js:

{% code title="props.js" %}
```javascript
import {Element} from "../src/props.{element}.js";
...
const otherBundle = {
    ...
    "props.{element}.css": {Element},
};
...
const entry = fs.createWriteStream("../src/style/index.css");
entry.write(`
    ...
    @import './props.{element}.css';
`);
entry.end();

```
{% endcode %}
