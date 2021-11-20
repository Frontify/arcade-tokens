const getFigmaTypography = require("./getFigmaTypography");
const getFigmaShadows = require("./getFigmaShadows");
const getFigmaColors = require("./getFigmaColors");

const themeToTitleCase = (string) => {
  return string
    .toLowerCase()
    .split(".")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const getTheme = ({ dictionary }) => {
  return {
    ...getFigmaTypography(dictionary.tokens),
    ...getFigmaShadows(dictionary.tokens),
    ...getFigmaColors(dictionary.allTokens),
  };
};

module.exports = ({ dictionary, options }) => {
  const theme = getTheme({ dictionary });

  if (options && options.theme) {
    return JSON.stringify({ [themeToTitleCase(options.theme)]: theme });
  }

  return JSON.stringify(theme);
};
