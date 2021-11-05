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

const getFontSize = ({ dictionary }) => {
  let fontSize = {};
  const fonts = {
    body: dictionary.tokens.body,
    heading: dictionary.tokens.heading,
    code: dictionary.tokens.code,
  };
  for (key in fonts) {
    fontSize[`"${key}"`] = getFontSizeArray(fonts[key].size);
    fontSize[`"${key}-small"`] = getFontSizeArray(fonts[key].size.small);
    fontSize[`"${key}-medium"`] = getFontSizeArray(fonts[key].size.medium);
    fontSize[`"${key}-large"`] = getFontSizeArray(fonts[key].size.large);
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
    DEFAULT: shadows._.value,
    large: shadows.large._.value,
    medium: {
      DEFAULT: shadows.medium._.value,
      medium: shadows.medium.top.value,
      bottom: shadows.medium.bottom.value,
    },
  };
};

const getRingColor = ({ dictionary }) => {
  return `var(--${dictionary.tokens.color.interactive._.name})`;
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
    colors: getColors({ dictionary }),
    extend: getExtend({ dictionary }),
  };

  return theme;
};
