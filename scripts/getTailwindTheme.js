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

const getFontSize = (token) => {
  let value = token._.value;
  let letterSpacing = token.letterSpacing;
  let lineHeight = token.lineHeight;
  let array = [value];

  if (letterSpacing || lineHeight) {
    array[1] = {};

    if (letterSpacing) {
      array[1].letterSpacing = letterSpacing.value;
    }
    if (lineHeight) {
      array[1].lineHeight = lineHeight.value;
    }
  }

  return array;
};

const getFontSizes = ({ dictionary }) => {
  let tree = {};
  const fonts = {
    body: dictionary.tokens.body,
    heading: dictionary.tokens.heading,
    code: dictionary.tokens.code,
  };
  for (key in fonts) {
    tree[key] = {
      DEFAULT: getFontSize(fonts[key].size),
      small: getFontSize(fonts[key].size.small),
      medium: getFontSize(fonts[key].size.medium),
      large: getFontSize(fonts[key].size.large),
    };
  }
  return tree;
};

const getFontFamily = ({ dictionary }) => {
  let tree = {};
  const fonts = {
    body: dictionary.tokens.body,
    heading: dictionary.tokens.heading,
    code: dictionary.tokens.code,
  };
  for (key in fonts) {
    tree[key] = [fonts[key].family.value].concat(
      fonts[key].fallbackFamilies.value
    );
  }
  return tree;
};

module.exports = ({ tokens, dictionary }) => {
  const config = {
    fontSize: getFontSizes({ dictionary }),
    fontFamily: getFontFamily({ dictionary }),
    boxShadow: {},
    colors: getColors({ dictionary }),
    ringColor: {},
    ringColor: {},
    extend: {},
  };
  // console.log(config);
  return config;
};
