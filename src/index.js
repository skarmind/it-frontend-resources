import DarkColors from "./props.colors.dark";
import LightColors from "./props.colors.light";
import Breakpoints from "./props.breakpoints";
import Radius from "./props.radius";

const camelize = text => {
  text = text.replace(/[-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  return text.substr(0, 1).toLowerCase() + text.substr(1);
};

const mapToObjectNotation = props => {
  for (var prop in props) {
    if (typeof props[prop] === "object" && props[prop] !== null) {
      mapToObjectNotation(props[prop]);
    } else {
      props[camelize(prop)] = props[prop];
      delete props[prop];
    }
  }
  return props;
};

const OpenProps = mapToObjectNotation({
  DarkColors,
  LightColors,
  Breakpoints,
  Radius,
});

export default OpenProps;
