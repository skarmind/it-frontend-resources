import Animations from './props.animations.js'
import Sizes from './props.sizes.js'
import Colors from './props.colors.js'
import Fonts from './props.fonts.js'
import Borders from './props.borders.js'
import Aspects from './props.aspects.js'
import Easings from './props.easing.js'
import {StaticShadows} from './props.shadows.js'
import Zindex from './props.zindex.js'

const camelize = text => {
  text = text.replace(/[-]+(.)?/g, (_, c) => c 
    ? c.toUpperCase() 
    : '')
  return text.substr(0, 1).toLowerCase() + text.substr(1)
}

const mapToObjectNotation = props => {
  for (var prop in props)
    props[camelize(prop)] = props[prop]
  return props
}

const OpenProps = mapToObjectNotation({
  ...Animations,
  ...Sizes,
  ...Colors,
  ...Fonts,
  ...Borders,
  ...Aspects,
  ...Easings,
  ...StaticShadows,
  ...Zindex,
})

export default OpenProps