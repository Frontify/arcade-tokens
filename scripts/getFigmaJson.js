const getFigmaTypography = require("./getFigmaTypography");
const getFigmaShadows = require("./getFigmaShadows");
const getFigmaColors = require("./getFigmaColors");

const formatThemeName = (string) => {
  return string.toLowerCase().split(".").join("-");
};

const getTheme = ({ dictionary, options }) => {
  return {
    ...getFigmaTypography({ dictionary, options }),
    ...getFigmaShadows({ dictionary, options }),
    ...getFigmaColors({ dictionary, options }),
  };
};

module.exports = ({ dictionary, options }) => {
  const theme = getTheme({ dictionary, options });

  if (options && options.theme) {
    return JSON.stringify({ [formatThemeName(options.theme)]: theme });
  }

  return JSON.stringify(theme);
};
