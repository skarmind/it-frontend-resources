# Начало работы

Для интеграции в проект itwa-design-tokens имеет 2 возможных способа:

1. JavaScript объект
2. CSS переменные

{% hint style="info" %}
Возможность подключения вспомогательных элементов дизайн-системы, таких как шрифты и SCSS миксины рассмотрена ниже.
{% endhint %}

#### Подключение переменных дизайн-системы в виде JavaScript объекта:

Подключение в виде ES модуля:

```javascript
import props from 'itwa-design-tokens';

const { DarkColors, LightColors, Breakpoints } = props
```

Подключение в CommonJS стиле:

```javascript
const props = require('itwa-design-tokens');

const { DarkColors, LightColors, Breakpoints } = props
```

#### Подключение переменных дизайн-системы в виде CSS переменных:

Подключение через файлы стилей:

```css
@import "itwa-design-tokens/dist/style/props.min.css";
```

Подключение через  JavaScript с помощью  css лоадеров:

```javascript
import "itwa-design-tokens/dist/style/props.min.css";
```
