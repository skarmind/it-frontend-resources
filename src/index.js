import DarkColors from "./props.colors.dark";
import LightColors from "./props.colors.light";
import DarkShadows from "./props.shadows.dark.js";
import LightShadows from "./props.shadows.light.js";
import Breakpoints from "./props.breakpoints";
import Spaces from "./props.spaces.js";
import Dividers from "./props.dividers.js";
import Radius from "./props.radius.js";
import Durations from "./props.durations.js";
import Opacities from "./props.opacities.js";

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
  DarkShadows,
  LightShadows,
  Breakpoints,
  Spaces,
  Dividers,
  Radius,
  Durations,
  Opacities,
});

export default OpenProps;
