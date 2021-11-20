// const createTree = ({ node }) => {
//   let tree = {};
//   if (node.hasOwnProperty("value")) {
//     return `var(--${node.name})`;
//   }
//   for (key in node) {
//     tree[key.replace("_", "DEFAULT")] = createTree({
//       node: node[key],
//     });
//   }
//   return tree;
// };

const getExtend = ({ dictionary }) => {
  return {
    outline: {
      violet: `1px solid var(--${dictionary.tokens.color["interactive"].name})`,
    },
  };
};

const getObject = ({ tokens, filter }) => {
  const matchingTokens = tokens.filter(filter);

  let object = {};
  matchingTokens.forEach((token) => {
    object[token.name] = `var(--${token.name})`;
  });
  return object;
};

const getTheme = (dictionary) => {
  const tokens = dictionary.allTokens;

  return {
    fontSize: getObject({
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "size" &&
          token.attributes.type === "font"
        );
      },
    }),
    fontFamily: getObject({
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "font" &&
          token.attributes.type === "family"
        );
      },
    }),
    boxShadow: getObject({
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "shadow" &&
          token.attributes.type === "matrix"
        );
      },
    }),
    borderWidth: getObject({
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "size" &&
          token.attributes.type === "lineWidth"
        );
      },
    }),
    borderWidth: getObject({
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "size" &&
          token.attributes.type === "borderRadius"
        );
      },
    }),
    colors: getObject({
      tokens,
      filter: (token) => {
        return token.path[0] === "color";
      },
    }),
    extend: getObject({
      tokens,
      filter: (token) => {
        return token.path[0] === "color";
      },
    }),
    ringColor: `var(--${dictionary.tokens.color["interactive"].name})`,
    extend: getExtend({ dictionary }),
  };
};

module.exports = ({ dictionary }) => {
  return getTheme(dictionary);
};
