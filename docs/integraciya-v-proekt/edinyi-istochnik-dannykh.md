# Единый источник данных

Единым источником данных для дизайн-системы являются JavaScript модули, хранящиеся в папке src. Каждый модуль именуется согласно элементу дизайн-системы с добавлением приставки props, отделенной знаком '"." и экспортирует объект по-умолчанию.  Пример такого файла props.divider.js Элементы, зависимые от цветовой схемы маркируются суффиксом "dark" и "light" и также отделены знаком "."

Пример модуля, независимого от цветовой схемы элемента:

{% code title="props.dividers.js" %}
```javascript
const Dividers = {
  "--divider-s": "1px",
  "--divider-m": "2px",
  "--divider-l": "4px",Ï
};

export default Dividers;
```
{% endcode %}

Пример модуля, зависимого от цветовой схемы элемента:

{% code title="props.shadows.dark.js" %}
```javascript
const Shadows = {
  "--shadow-s": " 0px 1px 2px 0px #000B11E5, 0px 1px 3px 0px #000B11E5",
  "--shadow-m": "0px 4px 6px -2px #000B11E5, 0px 10px 15px -3px #000B11E5",
  "--shadow-l": "0px 10px 40px 0px #000B11E5",
};

export default Shadow
```
{% endcode %}

{% hint style="info" %}
Данный набор модулей является источником данных как для CSS, так и JS переменных, а так же для переменных контрольных точек (breakpoints) переменных SCSS.
{% endhint %}
