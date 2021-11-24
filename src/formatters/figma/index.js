const mergeDeep = require("./mergeDeep");
const toTitleCase = require("./toTitleCase");

const getFigmaTypography = require("./getFigmaTypography");
const getFigmaShadows = require("./getFigmaShadows");
const getFigmaAliasColors = require("./getFigmaAliasColors");

const formatThemeName = (string) => {
  return toTitleCase(string.toLowerCase().replace(".", " "));
};

module.exports = ({ dictionary, options }) => {
  const tokens = dictionary.tokens;

  const mergedColorsAndShadows = mergeDeep(
    getFigmaShadows(tokens),
    getFigmaAliasColors(tokens)
  );

  if (options && options.theme) {
    return JSON.stringify({
      [formatThemeName(options.theme)]: mergedColorsAndShadows,
    });
  }

  const allMerged = mergeDeep(
    getFigmaTypography(tokens),
    mergedColorsAndShadows
  );

  return JSON.stringify(allMerged);
};
