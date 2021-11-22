const getExtend = ({ dictionary }) => {
  return {
    outline: {
      violet: `1px solid var(--${dictionary.tokens.color["interactive"].name})`,
    },
  };
};

const trimHyphens = (string) => {
  return string.replace(/^-+/, "").replace(/-+$/, "");
};

const getObject = ({ tokens, filter, remove }) => {
  const matchingTokens = tokens.filter(filter);

  let object = {};
  matchingTokens.forEach((token) => {
    const key = trimHyphens(token.name.replace(remove, ""));
    object[key || "DEFAULT"] = `var(--${token.name})`;
  });
  return object;
};

const getTheme = (dictionary) => {
  const tokens = dictionary.allTokens;

  return {
    fontSize: getObject({
      remove: "font-size",
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "size" &&
          token.attributes.type === "font"
        );
      },
    }),
    fontFamily: getObject({
      remove: "font-family",
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "font" &&
          token.attributes.type === "family"
        );
      },
    }),
    boxShadow: getObject({
      remove: "shadow",
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "shadow" &&
          token.attributes.type === "matrix"
        );
      },
    }),
    borderWidth: getObject({
      remove: "border-width",
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "size" &&
          token.attributes.type === "lineWidth"
        );
      },
    }),
    borderRadius: getObject({
      remove: "border-radius",
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "size" &&
          token.attributes.type === "borderRadius"
        );
      },
    }),
    colors: getObject({
      remove: "color",
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
