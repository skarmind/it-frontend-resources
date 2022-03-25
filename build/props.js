import fs from "fs";

import * as DarkColors from "../src/props.colors.dark.js";
import * as LightColors from "../src/props.colors.light.js";
import * as DarkShadows from "../src/props.shadows.dark.js";
import * as LightShadows from "../src/props.shadows.light.js";
import Breakpoints from "../src/props.breakpoints.js";
import Spaces from "../src/props.spaces.js";
import Dividers from "../src/props.dividers.js";
import Radius from "../src/props.radius.js";
import Durations from "../src/props.durations.js";
import Opacities from "../src/props.opacities.js";

import { buildPropsStylesheet } from "./to-stylesheet.js";

const prefix = "plx";

// Внутри объекта перечислены файлы с переменными, изменяющимися при переключении на темную тему
const darkBundle = {
  "props.colors.dark.css": DarkColors.default,
  "props.shadows.dark.css": DarkShadows.default,
};

// Внутри объекта перечислены файлы с переменными, изменяющимися при переключении на светлую тему
const lightBundle = {
  "props.colors.light.css": LightColors.default,
  "props.shadows.light.css": LightShadows.default,
};

// Внутри объекта перечислены файлы с остальными переменными
const otherBundle = {
  "props.breakpoints.css": Breakpoints,
  "props.spaces.css": Spaces,
  "props.dividers.css": Dividers,
  "props.radius.css": Radius,
  "props.durations.css": Durations,
  "props.opacities.css": Opacities,
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
    @import '../fonts/index.css';
    @import '../helpers/text-style.css';
    @import './props.colors.light.css';
    @import './props.colors.dark.css';
    @import './props.shadows.light.css';
    @import './props.shadows.dark.css';
    @import './props.breakpoints.css';
    @import './props.spaces.css';
    @import './props.dividers.css';
    @import './props.radius.css';
    @import './props.durations.css';
    @import './props.opacities.css';
`);
entry.end();
