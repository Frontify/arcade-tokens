const mergeDeep = require("./mergeDeep");
const toTitleCase = require("./toTitleCase");

const getFigmaAliasTypography = require("./getFigmaAliasTypography");
const getFigmaAliasShadows = require("./getFigmaAliasShadows");
const getFigmaAliasColors = require("./getFigmaAliasColors");

const formatThemeName = (string) => {
  return toTitleCase(string.toLowerCase().replace(".", " "));
};

module.exports = ({ dictionary, options }) => {
  const tokens = dictionary.tokens;

  const mergedColorsAndShadows = mergeDeep(
    getFigmaAliasShadows(tokens),
    getFigmaAliasColors(tokens)
  );

  if (options && options.theme) {
    return JSON.stringify({
      [formatThemeName(options.theme)]: mergedColorsAndShadows,
    });
  }

  const allMerged = mergeDeep(
    getFigmaAliasTypography(tokens),
    mergedColorsAndShadows
  );

  return JSON.stringify(allMerged);
};
