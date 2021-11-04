const defaultConfig = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,tsx}"],
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  prefix: "tw-",
};

const getJsTree = (node) => {
  const isToken = node.hasOwnProperty("value");
  let tree = {};

  if (isToken) {
    return node.value;
  }
  for (key in node) {
    tree[key.replace("_", "DEFAULT")] = getJsTree(node[key]);
  }

  return tree;
};

const getFontSizes = (node) => {
  let sizes = {};

  for (key in node) {
    console.log(key);
    let size = node[key];
    let array = size._ ? [size._.value] : [size.value];

    if (size.letterSpacing || size.lineHeight) {
      array.push({});
      size.letterSpacing && (array[1].letterSpacing = size.letterSpacing.value);
      size.lineHeight && (array[1].lineHeight = size.lineHeight.value);
    }

    sizes[key.replace("_", "DEFAULT")] = array;
  }

  return sizes;
};

const getFontFamilies = (node) => {
  return [node.family.value];
};

const getTree = (tokens) => {
  let tree = {
    colors: {},
    fontFamily: {},
    fontSize: {},
  };
  for (key in tokens) {
    switch (key) {
      case "color":
        tree["colors"] = getJsTree(tokens[key]);
        break;
      case "body":
      case "heading":
      case "code":
        tree["fontFamily"][key] = getFontFamilies(tokens[key]);
        tree["fontSize"][key] = getFontSizes(tokens[key].size);
        break;
      default:
        newKey = key;
    }
  }
  return tree;
};

module.exports = (tokens) => {
  const tree = { ...defaultConfig, ...getTree(tokens) };
  const jsonTree = JSON.stringify(tree, null, 0);
  const unQuotedTree = jsonTree.replace(/"([^"]+)":/g, "$1:");
  return unQuotedTree;
};
