# stitches-normalize-css

[Normalize CSS](https://necolas.github.io/normalize.css/) for [stitches](https://github.com/modulz/stitches).

---

## Installation:

`yarn add stitches-normalize-css`

or

`npm install stitches-normalize-css`

## Usage:

```jsx
import * as React from 'react'
import { reset } from 'stitches-normalize-css'
import { globalCss } from 'path-to/stitches.config.js'

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
