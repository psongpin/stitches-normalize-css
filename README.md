# stitches-normalize-css

![GitHub release](https://img.shields.io/github/v/release/psongpin/stitches-normalize-css.svg) ![issues](https://img.shields.io/github/issues/psongpin/stitches-normalize-css)

[Normalize CSS](https://necolas.github.io/normalize.css/) for [stitches](https://github.com/modulz/stitches).

[Demo on CodeSandbox](https://codesandbox.io/s/stitches-normalize-css-gt6tp).

---

## Installation:

`yarn add stitches-normalize-css`

or

`npm install stitches-normalize-css`

## Usage:

#### Adding `reset` to `globalCss`

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

#### Adding custom global styles on top of `reset`

```jsx
import * as React from 'react'
import type * as Stitches from '@stitches/react';
import { reset } from 'stitches-normalize-css'
import { globalCss } from 'path-to/stitches.config.ts'

const customGlobalStyles: Record<string, Stitches.CSS> = {
  ".App": {
    backgroundColor: "papayawhip"
  },
  body: {
    border: "2px solid red",
    minHeight: "100vh"
  }
};

const globalStyles = globalCss(reset, customGlobalStyles);

const App: React.FC = () => {
  globalStyles()
  return <div className="App">App</div>
}
```

## Credits

All credit goes to [Nicolas Gallagher](https://github.com/necolas) for [Normalize CSS](https://necolas.github.io/normalize.css/).
