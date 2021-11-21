const mergeDeep = require("./mergeDeep");
const { isTypeToken } = require("./tokenFilters");

const TYPE = "typography";
const MAIN_TOKEN_NAMES = ["body", "heading", "code"];
const REQUIRED_PROPERTIES = [
  "font-size",
  "line-height",
  "font-family",
  "font-weight",
];
const OPTIONAL_PROPERTIES = ["letter-spacing"];
const ALL_PROPERTIES = REQUIRED_PROPERTIES.concat(OPTIONAL_PROPERTIES);

const containsAll = (obj, arr) => {
  for (const str of arr) {
    if (Object.keys(obj).includes(str)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const toCamelCase = (text) => {
  return text.replace(/-\w/g, clearAndUpper);
};

const clearAndUpper = (text) => {
  return text.replace(/-/, "").toUpperCase();
};

const getFormattedTokenTree = (path, token) => {
  let tree = {};
  const pre = path[0];
  const post = path.slice(1, path.length);

  if (path.length > 1) {
    tree[pre] = getFormattedTokenTree(post, token);
  } else if (path.length > 0) {
    tree[pre] = token.value;
  }

  return tree;
};

const joinProperties = (path, propertiesToJoin) => {
  propertiesToJoin.forEach((property) => {
    const splitProperty = property.split("-");
    let join = {};

    for (let i = 0; i < splitProperty.length; i++) {
      const matchingIndex = path.indexOf(splitProperty[i]);

      if (matchingIndex > -1) {
        if (!join.start) {
          join.start = matchingIndex;
        }
        if (i === splitProperty.length - 1) {
          join.end = matchingIndex + 1;
        }
      }
    }

    if (join.start && join.end) {
      const pre = path.slice(0, join.start);
      const prop = [property];
      const post = path.slice(join.end, path.length - 1);
      path = pre.concat(prop, post);
    }
  });

  return path;
};

/**
 * NOTE (From Jamie): This took me hours and it's still an absolute mess. I'm not even
 * 100% sure how it works! Probably worth a cleanup
 */
const getStyles = ({ tree, styles = {}, name = "", prev = "" }) => {
  for (key in tree) {
    // It's not the key of a font style
    if (!ALL_PROPERTIES.includes(key)) {
      styles = getStyles({
        tree: tree[key],
        styles,
        name: name !== "" ? name + "-" + key : key,
        prev: name,
      });
    }
    // A style doesn't exist yet on the styles
    else if (!styles[name]) {
      styles[name] = {
        ...styles[prev],
        ...{ [key]: tree[key] },
      };
    }
    // The style exists and we want to extend it with the new property
    else {
      styles[name][key] = tree[key];
    }
  }
  return styles;
};

const getElementTypography = (tokens) => {
  let formattedTokenTree = {};
  let elementTypography = {};

  // Creates a tree that's needed for 'getStyles'
  tokens.forEach((token) => {
    const path = token.name.split("-");
    const joined = joinProperties(path, ALL_PROPERTIES);
    formattedTokenTree = mergeDeep(
      formattedTokenTree,
      getFormattedTokenTree(joined, token)
    );
  });

  // Creates a tree of styles based on name and such
  const styles = getStyles({ tree: formattedTokenTree });

  for (styleKey in styles) {
    const properties = styles[styleKey];
    const category = styleKey.split("-")[0];
    const hasRequiredProperties = containsAll(properties, REQUIRED_PROPERTIES);

    if (hasRequiredProperties) {
      let transformedProperties = {};

      for (propertyKey in properties) {
        const propertyValue = properties[propertyKey];
        const camelCaseProperty = toCamelCase(propertyKey);
        transformedProperties[camelCaseProperty] = propertyValue;
      }

      elementTypography = mergeDeep(elementTypography, {
        [category]: {
          [styleKey]: {
            type: TYPE,
            value: transformedProperties,
          },
        },
      });
    }
  }
  console.log(elementTypography);
  return elementTypography;
};

module.exports = (allTokens) => {
  const elementTypeTokens = allTokens.filter((token) => {
    return !MAIN_TOKEN_NAMES.includes(token.path[0]) && isTypeToken(token);
  });

  return getElementTypography(elementTypeTokens);
};
