import darkColors from "./props.colors.dark.js";
import lightColors from "./props.colors.light.js";

const camelize = text => {
  text = text.replace(/[-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  return text.substr(0, 1).toLowerCase() + text.substr(1);
};

const mapToObjectNotation = props => {
  for (var prop in props) props[camelize(prop)] = props[prop];
  return props;
};

const OpenProps = mapToObjectNotation({
  ...darkColors,
  ...lightColors,
});

export default OpenProps;