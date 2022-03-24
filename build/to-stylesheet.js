import fs from "fs";

export const buildPropsStylesheet = (
  { filename, props },
  { isDark, prefix }
) => {
  const file = fs.createWriteStream("../src/style/" + filename);

  let appendedMeta = "";

  if (isDark) {
    file.write(`[color-scheme='dark']{\n
color-scheme: dark; \n`);
  } else {
    file.write(`:root{\n
color-scheme: light; \n`);
  }

  Object.entries(props).forEach(([prop, val]) => {
    if (prop.includes("-@")) return;

    if (prefix && prefix !== "''") prop = `--${prefix}-` + prop.slice(2);

    file.write(`${prop}: ${val};\n`);
  });

  file.write("}\n");
  file.end(appendedMeta);
};
