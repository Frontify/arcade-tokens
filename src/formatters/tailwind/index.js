const template = require("./template");
const StyleDictionary = require("style-dictionary");
const { fileHeader } = StyleDictionary.formatHelpers;
const buildPlugin = require("./buildPlugin");
const buildTheme = require("./buildTheme");

module.exports = ({ dictionary, file, options }) => {
  const { outputReferences } = options;

  const plugin = buildPlugin({
    dictionary,
    outputReferences,
  });

  const theme = buildTheme({
    tokens: dictionary.tokens.theme,
    dictionary,
  });

  return fileHeader({ file }) + template({ theme, plugin });
};
