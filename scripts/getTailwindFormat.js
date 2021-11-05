const getTailwindPlugin = require("./getTailwindPlugin");
const getTailwindTheme = require("./getTailwindTheme");

module.exports = ({ dictionary, file, options }) => {
  const { outputReferences, format } = options;
  const tailwindPlugin = getTailwindPlugin({
    dictionary,
    outputReferences,
  });
  const tailwindTheme = getTailwindTheme({
    tokens: dictionary.tokens.theme,
    dictionary,
  });
  const combined = {
    theme: tailwindTheme,
    plugin: tailwindPlugin,
  };
  const string = JSON.stringify(combined, null, 0);
  return fileHeader({ file }) + "module.exports = " + string + ";";
};
