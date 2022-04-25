const template = require("./template");
const templateDebug = require("./template_debug");
const StyleDictionary = require("style-dictionary");
const { fileHeader } = StyleDictionary.formatHelpers;
const buildPlugin = require("./buildPlugin");
const buildTheme = require("./buildTheme");

module.exports = ({ dictionary, file, options, debug = false }) => {
  const { outputReferences } = options;

  const plugin = buildPlugin({
    dictionary,
    outputReferences,
  });

  const theme = buildTheme({
    tokens: dictionary.tokens.theme,
    dictionary,
  });

  const tailwindConfigTemplate = debug === true ? templateDebug : template;

  return fileHeader({ file }) + tailwindConfigTemplate({ theme, plugin });
};
