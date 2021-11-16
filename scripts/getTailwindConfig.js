const StyleDictionary = require("style-dictionary");
const { fileHeader } = StyleDictionary.formatHelpers;
const getTailwindPlugin = require("./getTailwindPlugin");
const getTailwindTheme = require("./getTailwindTheme");

module.exports = ({ dictionary, file, options }) => {
  const { outputReferences } = options;
  const tailwindPlugin = getTailwindPlugin({
    dictionary,
    outputReferences,
  });

  const tailwindTheme = getTailwindTheme({
    tokens: dictionary.tokens.theme,
    dictionary,
  });

  return (
    fileHeader({ file }) +
    `const plugin = require('tailwindcss/plugin')

module.exports = {
    theme: ${JSON.stringify(tailwindTheme)},
    plugins: [
     plugin(function({ addComponents}) { 
       const components = ${JSON.stringify(tailwindPlugin)}; 
       addComponents(components); 
      })
    ]
}`
  );
};
