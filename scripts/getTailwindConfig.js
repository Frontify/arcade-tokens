let config = {
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

const getFontFamily = (node) => {
  return node.family.value;
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
        tree["fontFamily"][key] = getFontFamily(tokens[key]);
        tree["fontSize"][key] = getJsTree(tokens[key].size);
        break;
      default:
        newKey = key;
    }
  }
  return tree;
};

module.exports = (tokens) => {
  const tree = { ...config, ...getTree(tokens) };
  const jsonTree = JSON.stringify(tree, null, 2);
  const unQuotedTree = jsonTree.replace(/"([^"]+)":/g, "$1:") + ";";
  return unQuotedTree;
};
