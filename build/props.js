import fs from "fs";

import * as DarkColors from "../src/props.colors.dark.js";
import * as LightColors from "../src/props.colors.light.js";

import { buildPropsStylesheet } from "./to-stylesheet.js";

const [, , prefix = "", useWhere] = process.argv;

const darkBundle = {
  "props.colors.dark.css": DarkColors.default,
};

const lightBundle = {
  "props.colors.light.css": LightColors.default,
};

// gen prop variants
Object.entries({ ...darkBundle }).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { isDark: true, prefix });
});

Object.entries({ ...lightBundle }).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { isDark: false, prefix });
});

// gen index.css
const entry = fs.createWriteStream("../src/style/index.css");
entry.write(`
    @import './props.colors.light.css';
    @import './props.colors.dark.css';
`);
entry.end();
