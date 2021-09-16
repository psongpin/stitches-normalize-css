module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [`prettier --write ${filenames.join(' ')}`],

  // Format MarkDown and JSON
  '**/*.(md|json)': filenames => `prettier --write ${filenames.join(' ')}`,
}
