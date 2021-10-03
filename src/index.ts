export const normalize = {
  ':where(html)': { lineHeight: 1.15 },
  ':where(h1)': {
    fontSize: '2em',
    marginBlockEnd: '0.67em',
    marginBlockStart: '0.67em',
  },
  ':where(dl, ol, ul) :where(dl, ol, ul)': {
    marginBlockEnd: '0',
    marginBlockStart: '0',
  },
  ':where(hr)': { boxSizing: 'content-box', color: 'inherit', height: '0' },
  ':where(pre)': { fontFamily: 'monospace, monospace', fontSize: '1em' },
  ':where(abbr[title])': {
    textDecoration: 'underline',
    // textDecoration: 'underline dotted',
  },
  ':where(b, strong)': { fontWeight: 'bolder' },
  ':where(code, kbd, samp)': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  ':where(small)': { fontSize: '80%' },
  ':where(table)': { borderColor: 'currentColor', textIndent: '0' },
  ':where(button, input, select)': { margin: '0' },
  ':where(button)': { textTransform: 'none' },
  ':where(button, input:is([type="button" i], [type="reset" i], [type="submit" i]))':
    {
      WebkitAppearance: 'button',
    },
  ':where(progress)': { verticalAlign: 'baseline' },
  ':where(select)': { textTransform: 'none' },
  ':where(textarea)': { margin: '0' },
  ':where(input[type="search" i])': {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px',
  },
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '::-webkit-input-placeholder': { color: 'inherit', opacity: 0.54 },
  '::-webkit-search-decoration': { WebkitAppearance: 'none' },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  ':where(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: '0',
    },
  ':where(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focusring':
    {
      outline: '1px dotted ButtonText',
    },
  ':where(:-moz-ui-invalid)': { boxShadow: 'none' },
  ':where(dialog)': {
    backgroundColor: 'white',
    border: 'solid',
    color: 'black',
    // height: '-moz-fit-content',
    height: 'fit-content',
    left: '0',
    margin: 'auto',
    padding: '1em',
    position: 'absolute',
    right: '0',
    // width: '-moz-fit-content',
    width: 'fit-content',
  },
  ':where(dialog:not([open]))': { display: 'none' },
  ':where(summary)': { display: 'list-item' },
}

export const opinionated = {
  ...normalize,
  ':where(body)': { margin: '0' },
}
