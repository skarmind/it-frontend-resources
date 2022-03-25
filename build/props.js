import fs from "fs";

import * as DarkColors from "../src/props.colors.dark.js";
import * as LightColors from "../src/props.colors.light.js";
import Breakpoints from "../src/props.breakpoints.js";

import { buildPropsStylesheet } from "./to-stylesheet.js";

const prefix = "plx";

// Внутри объекта перечислены файлы с переменными, изменяющимися при переключении на темную тему
const darkBundle = {
  "props.colors.dark.css": DarkColors.default,
};

// Внутри объекта перечислены файлы с переменными, изменяющимися при переключении на светлую тему
const lightBundle = {
  "props.colors.light.css": LightColors.default,
};

// Внутри объекта перечислены файлы с остальными переменными
const otherBundle = {
  "props.breakpoints.css": Breakpoints,
};

// Генерация файлов с переменными

Object.entries(darkBundle).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { genTheme: "dark", prefix });
});

Object.entries(lightBundle).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { genTheme: "light", prefix });
});

Object.entries(otherBundle).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { genTheme: false, prefix });
});

// Генерация index.css
const entry = fs.createWriteStream("../src/style/index.css");
entry.write(`
    @import './props.colors.light.css';
    @import './props.colors.dark.css';
    @import './props.breakpoints.css';
`);
entry.end();
