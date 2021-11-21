const mergeDeep = require("./mergeDeep");
const { isTypeToken } = require("./tokenFilters");

const TYPE = "typography";

const MAIN_TOKEN_NAMES = ["body", "heading", "code"];

const REQUIRED_STYLES = [
  "font-size",
  "line-height",
  "font-family",
  "font-weight",
];

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

const getTree = (path, token) => {
  let tree = {};
  const pre = path[0];
  const post = path.slice(1, path.length);
  if (path.length > 1) {
    tree[pre] = getTree(post, token);
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
const getStyles = ({ tree, newObj = {}, name = "", prev = "" }) => {
  for (key in tree) {
    if (!REQUIRED_STYLES.includes(key)) {
      newObj = getStyles({
        tree: tree[key],
        newObj,
        name: name !== "" ? name + "-" + key : key,
        prev: name,
      });
    } else {
      if (!newObj[name]) {
        newObj[name] = {
          ...newObj[prev],
          ...{ [key]: tree[key] },
        };
      } else {
        newObj[name][key] = tree[key];
      }
    }
  }
  return newObj;
};

const getUiTypeTokens = (tokens) => {
  let tree = {};
  tokens.forEach((token) => {
    const path = token.name.split("-");
    // const joined = joinProperties(path, MAIN_TOKEN_STYLES);
    tree = mergeDeep(tree, getTree(path, token));
  });

  console.log(tree);

  let returnObject = {};
  const styles = getStyles({ tree: tree });
  for (key in styles) {
    if (containsAll(styles[key], REQUIRED_STYLES)) {
      returnObject[toCamelCase(key)] = styles[key];
    }
  }

  return returnObject;
};

const getElementTypeTokens = (tokens) => {
  let tree = {};
  tokens.forEach((token) => {
    const path = token.name.split("-");
    const joined = joinProperties(path, REQUIRED_STYLES);
    tree = mergeDeep(tree, getTree(joined, token));
  });

  let returnObject = {};
  const styles = getStyles({ tree: tree });

  for (key in styles) {
    if (containsAll(styles[key], REQUIRED_STYLES)) {
      let transformed = {};

      for (propKey in styles[key]) {
        transformed[toCamelCase(propKey)] = styles[key][propKey];
      }

      const category = key.split("-")[0];
      if (!returnObject[category]) {
        returnObject[category] = { [key]: { type: TYPE, value: transformed } };
      } else {
        returnObject[category][key] = { type: TYPE, value: transformed };
      }
    }
  }

  return returnObject;
};

module.exports = (allTokens) => {
  const elementTypeTokens = allTokens.filter((token) => {
    return !MAIN_TOKEN_NAMES.includes(token.path[0]) && isTypeToken(token);
  });

  return getElementTypeTokens(elementTypeTokens);
};
