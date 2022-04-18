# Начало работы

Для интеграции в проект itwa-design-tokens имеет 2 возможных способа:

1. [JavaScript объект](<README (1).md#podklyuchenie-peremennykh-dizain-sistemy-v-vide-javascript-obekta>)
2. [CSS переменные](<README (1).md#podklyuchenie-peremennykh-dizain-sistemy-v-vide-css-peremennykh>)

Так же есть возможность подключения вспомогательных элементов дизайн-системы, таких как шрифты и SCSS миксины ([см. ниже](<README (1).md#podklyuchenie-vspomogatelnykh-elementov-dizain-sistemy>)).

{% hint style="info" %}
Подробнее об элементах дизайн системы можно узнать в соответствующем [разделе документации](elementy-dizain-sistemy/)
{% endhint %}

## Подключение переменных дизайн-системы в виде JavaScript объекта:

#### Подключение в виде ES модуля:

```javascript
import props from 'itwa-design-tokens';

const { DarkColors, LightColors, Breakpoints } = props
```

#### Подключение в CommonJS стиле:

```javascript
const props = require('itwa-design-tokens');

const { DarkColors, LightColors, Breakpoints } = props
```

## Подключение переменных дизайн-системы в виде CSS переменных:

#### Подключение через файлы стилей:

```css
@import "itwa-design-tokens/dist/style/props.min.css";
```

#### Подключение через  JavaScript с помощью  css лоадеров:

```javascript
import "itwa-design-tokens/dist/style/props.min.css";
```

## Подключение вспомогательных элементов:

### Подключение шрифтов:

На данный момент подключение шрифтов реализовано вместе с css переменными через файл props.min.css ([см. выше](<README (1).md#podklyuchenie-cherez-faily-stilei>)). В будущем планируется реализовать возможность подключения шрифтов отдельно.

### Подключение элементов дизайн системы в виде SCSS переменных и миксинов:

На данный момент подключение в проекте используются только SCSS переменные контрольных точек (breakpoints), миксины media queries и миксины типографики.

{% hint style="warning" %}
Рекомендуется подключать SCSS переменные и миксины через соответствующие лоадеры, для того, чтобы эти инструменты были доступны в любом месте проекта.
{% endhint %}

#### Пример подключения SCSS переменных и миксинов через файл конфигурации Vue

{% hint style="warning" %}
Варианты подключения могут меняться в зависимости от версии того или иного инструмента.
{% endhint %}

{% code title="vue.config.js" %}
```javascript
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "itwa-design-tokens/dist/scss/index.scss";`,
      },
    },
  },
}
```
{% endcode %}

