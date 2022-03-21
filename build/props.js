import fs from "fs";

import Animations from "../src/props.animations.js";
import Sizes from "../src/props.sizes.js";
import * as OpenColors from "../src/props.colors.js";
import Fonts from "../src/props.fonts.js";
import Borders from "../src/props.borders.js";
import Aspects from "../src/props.aspects.js";
import Easings from "../src/props.easing.js";
import Shadows from "../src/props.shadows.js";
import Zindex from "../src/props.zindex.js";

import { buildPropsStylesheet } from "./to-stylesheet.js";

const [, , prefix = "", useWhere] = process.argv;

const selector = useWhere === "true" ? ":where(html)" : "html";

const mainbundle = {
  "props.fonts.css": Fonts,
  "props.sizes.css": Sizes,
  "props.easing.css": Easings,
  "props.zindex.css": Zindex,
  "props.shadows.css": Shadows,
  "props.aspects.css": Aspects,
  "props.colors.css": OpenColors.default,
  "props.animations.css": Animations,
  "props.borders.css": Borders,
};

const individual_colors = {
  "props.gray.css": OpenColors.Gray,
  "props.red.css": OpenColors.Red,
  "props.pink.css": OpenColors.Pink,
  "props.grape.css": OpenColors.Grape,
  "props.violet.css": OpenColors.Violet,
  "props.indigo.css": OpenColors.Indigo,
  "props.blue.css": OpenColors.Blue,
  "props.cyan.css": OpenColors.Cyan,
  "props.teal.css": OpenColors.Teal,
  "props.green.css": OpenColors.Green,
  "props.lime.css": OpenColors.Lime,
  "props.yellow.css": OpenColors.Yellow,
  "props.orange.css": OpenColors.Orange,
};

// gen prop variants
Object.entries({ ...mainbundle, ...individual_colors }).forEach(
  ([filename, props]) => {
    buildPropsStylesheet({ filename, props }, { selector, prefix });
  }
);

// gen index.css
const entry = fs.createWriteStream("../src/styles/index.css");
entry.write(`@import 'props.media.css';
`);
Object.keys(mainbundle).forEach((filename) => {
  entry.write(`@import '${filename}';\n`);
});
entry.end();
