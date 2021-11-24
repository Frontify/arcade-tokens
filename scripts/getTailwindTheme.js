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

const getFontSize = ({ tokens, filter, remove }) => {
  const matchingTokens = tokens.filter(filter);

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
    const slug = trimHyphens(key.replace(remove, ""));

    return {
      [slug]: [
        dictionary[key][key].value,
        {
          lineHeight: dictionary[key][`${key}-line-height`].value,
        },
      ],
    };
  });

  const fonts = list.reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});

  return fonts;
};

const getTheme = (dictionary) => {
  const tokens = dictionary.allTokens;

  return {
    fontSize: getFontSize({
      remove: "size-",
      tokens,
      filter: (token) => {
        return (
          token.attributes.category === "size" &&
          (token.attributes.type === "font" ||
            token.attributes.type === "lineHeight")
        );
      },
    }),
    fontFamily: getObject({
      remove: "family",
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
