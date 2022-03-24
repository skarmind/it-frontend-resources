import fs from "fs";

import * as DarkColors from "../src/props.colors.dark.js";
import * as LightColors from "../src/props.colors.light.js";
import Breakpoints from "../src/props.breakpoints.js";

import { buildPropsStylesheet } from "./to-stylesheet.js";

const darkBundle = {
  "props.colors.dark.css": DarkColors.default,
};

const lightBundle = {
  "props.colors.light.css": LightColors.default,
};

const otherBundle = {
  "props.breakpoints.css": Breakpoints,
};

// gen prop variants
Object.entries(darkBundle).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { genTheme: "dark" });
});

Object.entries(lightBundle).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { genTheme: "light" });
});

Object.entries(otherBundle).forEach(([filename, props]) => {
  buildPropsStylesheet({ filename, props }, { genTheme: false });
});

// gen index.css
const entry = fs.createWriteStream("../src/style/index.css");
entry.write(`
    @import './props.colors.light.css';
    @import './props.colors.dark.css';
    @import './props.breakpoints.css';
`);
entry.end();
