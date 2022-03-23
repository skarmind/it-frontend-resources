import fs from "fs";

export const buildPropsStylesheet = (
  { filename, props },
  { selector, prefix }
) => {
  const file = fs.createWriteStream("../src/style/" + filename);

  let appendedMeta = "";

  file.write(`${selector ? "[color-scheme='dark']" : ":root"} {\n`);

  Object.entries(props).forEach(([prop, val]) => {
    if (prop.includes("-@")) return;

    if (prefix && prefix !== "''") prop = `--${prefix}-` + prop.slice(2);

    file.write(`  ${prop}: ${val};\n`);
  });

  file.write("}\n");
  file.end(appendedMeta);
};
