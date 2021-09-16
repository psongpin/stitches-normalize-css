# stitches-normalize-css

![GitHub release](https://img.shields.io/github/v/release/psongpin/stitches-normalize-css.svg) ![issues](https://img.shields.io/github/issues/psongpin/stitches-normalize-css)

[Normalize CSS](https://necolas.github.io/normalize.css/) for [stitches](https://github.com/modulz/stitches).

[Demo on CodeSandbox](https://codesandbox.io/s/zealous-hopper-5npr0?file=/src/App.tsx).

---

## Installation:

`yarn add stitches-normalize-css`

or

`npm install stitches-normalize-css`

## Usage:

```jsx
import * as React from 'react'
import { reset } from 'stitches-normalize-css'
import { globalCss } from 'path-to/stitches.config.ts'

// path-to/stitches.config.js - Sample stitches config
/*
export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
})
*/

const globalStyles = globalCss(reset)

const App: React.FC = () => {
  globalStyles()
  return <div>App</div>
}
```

## Credits

All credit goes to [Nicolas Gallagher](https://github.com/necolas) for [Normalize CSS](https://necolas.github.io/normalize.css/).
