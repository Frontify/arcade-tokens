const getFigmaTypography = require("./getFigmaTypography");
const getFigmaShadows = require("./getFigmaShadows");
const getFigmaColors = require("./getFigmaColors");
const mergeDeep = require("./mergeDeep");

const formatThemeName = (string) => {
  return string.toLowerCase().split(".").join("-");
};

const getTheme = ({ dictionary, options }) => {
  return mergeDeep(
    getFigmaColors({ dictionary, options }),
    mergeDeep(
      getFigmaTypography({ dictionary, options }),
      getFigmaShadows({ dictionary, options })
    )
  );
};

module.exports = ({ dictionary, options }) => {
  const theme = getTheme({ dictionary, options });

  if (options && options.theme) {
    return JSON.stringify({ [formatThemeName(options.theme)]: theme });
  }

  return JSON.stringify(theme);
};
