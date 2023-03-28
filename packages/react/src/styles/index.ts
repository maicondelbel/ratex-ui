import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ratex-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  config,
  createTheme,
  theme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
  media: breakpoints,
})

export {
  config,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
  createTheme,
}
