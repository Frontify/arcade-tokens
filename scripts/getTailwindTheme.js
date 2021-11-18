const createTree = ({ node }) => {
  let tree = {};
  if (node.hasOwnProperty("value")) {
    return `var(--${node.name})`;
  }
  for (key in node) {
    tree[key.replace("_", "DEFAULT")] = createTree({
      node: node[key],
    });
  }
  return tree;
};

const getColors = ({ dictionary }) => {
  const colors = dictionary.tokens.color;
  const tree = createTree({ node: colors });
  return tree;
};

const getFontSizeArray = (token) => {
  let name = token._.name;
  let letterSpacing = token.letterSpacing;
  let lineHeight = token.lineHeight;
  let array = [`--var(${name})`];

  if (letterSpacing || lineHeight) {
    array[1] = {};

    if (letterSpacing) {
      array[1].letterSpacing = `--var(${letterSpacing.name})`;
    }
    if (lineHeight) {
      array[1].lineHeight = `--var(${lineHeight.name})`;
    }
  }

  return array;
};

const kebabize = (str) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
  );

const getFontSize = ({ dictionary }) => {
  let fontSize = {};
  const fonts = {
    body: dictionary.tokens.body,
    heading: dictionary.tokens.heading,
    code: dictionary.tokens.code,
  };
  for (fontKey in fonts) {
    for (sizeKey in fonts[fontKey].size) {
      if (sizeKey === "_") {
        fontSize[`${fontKey}`] = getFontSizeArray(fonts[fontKey].size);
      } else {
        fontSize[`${fontKey}-${kebabize(sizeKey)}`] = getFontSizeArray(
          fonts[fontKey].size[sizeKey]
        );
      }
    }
  }
  return fontSize;
};

const getFontFamily = ({ dictionary }) => {
  let fontFamily = {};
  const fonts = {
    body: dictionary.tokens.body,
    heading: dictionary.tokens.heading,
    code: dictionary.tokens.code,
  };
  for (key in fonts) {
    fontFamily[key] = [`var(--${fonts[key].familyStack.name})`];
  }
  return fontFamily;
};

const getBoxShadow = ({ dictionary }) => {
  const shadows = dictionary.tokens.shadow;
  return {
    DEFAULT: `var(--${shadows._.name})`,
    large: `var(--${shadows.large._.name})`,
    medium: {
      DEFAULT: `var(--${shadows._.name})`,
      medium: `var(--${shadows.top.name})`,
      bottom: `var(--${shadows.bottom.name})`,
    },
  };
};

const getRingColor = ({ dictionary }) => {
  return `var(--${dictionary.tokens.color.interactive._.name})`;
};

const getBorderWidth = ({ dictionary }) => {
  const borderWidths = dictionary.tokens.border.width;
  let borderWidth = {};
  for (key in borderWidths) {
    borderWidth[
      key.replace("_", "DEFAULT")
    ] = `var(--${borderWidths[key].name})`;
  }
  return borderWidth;
};

const getBorderRadius = ({ dictionary }) => {
  const borderRadii = dictionary.tokens.border.radius;
  let borderRadius = {};
  for (key in borderRadii) {
    borderRadius[
      key.replace("_", "DEFAULT")
    ] = `var(--${borderRadii[key].name})`;
  }
  return borderRadius;
};

const getExtend = ({ dictionary }) => {
  return {
    outline: {
      violet: `1px solid var(--${dictionary.tokens.color.interactive._.name})`,
    },
  };
};

module.exports = ({ dictionary }) => {
  const theme = {
    fontSize: getFontSize({ dictionary }),
    fontFamily: getFontFamily({ dictionary }),
    ringColor: getRingColor({ dictionary }),
    boxShadow: getBoxShadow({ dictionary }),
    borderWidth: getBorderWidth({ dictionary }),
    borderRadius: getBorderRadius({ dictionary }),
    colors: getColors({ dictionary }),
    extend: getExtend({ dictionary }),
  };

  return theme;
};
