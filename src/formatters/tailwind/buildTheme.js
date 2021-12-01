const getExtend = ({ dictionary }) => {
  return {
    outline: {
      violet: `1px solid var(--${dictionary.tokens.focus["ring-color"].name})`,
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

const getFontSize = ({ tokens }) => {
  const matchingTokens = tokens.filter(
    (token) =>
      token.attributes.category === "size" &&
      ["font", "lineHeight"].includes(token.attributes.type)
  );

  const dictionary = matchingTokens.reduce((acc, cur) => {
    const slug = cur.name.replace("-line-height", "");

    return {
      ...acc,
      [slug]: {
        ...acc[slug],
        [cur.name]: cur,
      },
    };
  }, {});

  const list = Object.keys(dictionary).map((key) => {
    const slug = key.replace("size-", "");

    return {
      [slug]: [
        `--var(${dictionary[key][key].name})`,
        `--var(${dictionary[key][`${key}-line-height`].name})`,
      ],
    };
  });

  const fonts = list.reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});

  return fonts;
};

const getColors = ({ tokens }) => {
  const matchingTokens = tokens.filter(
    (token) => token.attributes.category === "color"
  );

  return matchingTokens.reduce((acc, token) => {
    const { type, item } = token.attributes;

    /* 
      This returns direct values to the colors object, like:
      {
        "lightest": "var(--color-lightest)"
      }
     */
    if (!item && token.filePath.includes("brand")) {
      const key =
        trimHyphens(type.replace("color", "").replace("--", "-")) || "DEFAULT";
      return {
        ...acc,
        [key]: `var(--${token.name})`,
      };
    }

    /* 
      This returns nested values to the colors object, like:
      {
        "grey": {
          "80": "var(--color-grey-80)"
        }
      }
     */

    if (token.filePath.includes("brand")) {
      const key =
        trimHyphens(item.replace("color", "").replace("--", "-")) || "DEFAULT";
      return {
        ...acc,
        [type]: {
          ...acc[type],
          [key]: `var(--${token.name})`,
        },
      };
    }

    const key =
      trimHyphens(type.replace("color", "").replace("--", "-")) || "DEFAULT";
    return {
      ...acc,
      [token.path[0]]: {
        ...acc[token.path[0]],
        [key]: `var(--${token.name})`,
      },
    };
  }, {});
};

const getTheme = (dictionary) => {
  const tokens = dictionary.allTokens;

  return {
    fontSize: getFontSize({
      tokens,
    }),
    fontFamily: getObject({
      remove: "family",
      tokens,
      filter: (token) =>
        token.attributes.category === "font" &&
        token.attributes.type === "family",
    }),
    boxShadow: getObject({
      remove: "shadow",
      tokens,
      filter: (token) =>
        token.attributes.category === "shadow" &&
        token.attributes.type === "matrix",
    }),
    borderWidth: getObject({
      remove: "line-width",
      tokens,
      filter: (token) =>
        token.attributes.category === "size" &&
        token.attributes.type === "lineWidth",
    }),
    borderRadius: getObject({
      remove: "radius",
      tokens,
      filter: (token) =>
        token.attributes.category === "size" &&
        token.attributes.type === "borderRadius",
    }),
    colors: getColors({
      tokens,
    }),
    ringColor: `var(--${dictionary.tokens.focus["ring-color"].name})`,
    extend: getExtend({ dictionary }),
  };
};

module.exports = ({ dictionary }) => {
  return getTheme(dictionary);
};
