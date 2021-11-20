const themeToTitleCase = (string) => {
  return string
    .toLowerCase()
    .split(".")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const standardTransform = ({ tokens, filter, type }) => {
  const matchingTokens = tokens.filter(filter);
  let object = {};
  matchingTokens.forEach((token) => {
    object[getName(token)] = {
      type: type,
      value: token.value,
    };
  });
  return object;
};

const shadowTransform = ({ tokens, type }) => {
  let object = {};
  const yOffsetTokens = tokens.filter((token) => {
    return (
      token.attributes.category === "size" &&
      token.attributes.type === "shadowOffset" &&
      token.attributes.item === "y"
    );
  });

  yOffsetTokens.forEach((yOffsetToken) => {
    const xOffsetToken = tokens.filter((token) => {
      return (
        token.path[0] === yOffsetToken.path[0] &&
        token.path[1] === yOffsetToken.path[1] &&
        token.path[2] === yOffsetToken.path[2] &&
        token.path[3] === yOffsetToken.path[3] &&
        token.attributes.category === "size" &&
        token.attributes.type === "shadowOffset" &&
        token.attributes.item === "x"
      );
    })[0];

    const blurToken = tokens.filter((token) => {
      return (
        token.path[0] === yOffsetToken.path[0] &&
        token.path[1] === yOffsetToken.path[1] &&
        token.attributes.category === "size" &&
        token.attributes.type === "shadowBlur"
      );
    })[0];

    const spreadToken = tokens.filter((token) => {
      return (
        token.path[0] === yOffsetToken.path[0] &&
        token.path[1] === yOffsetToken.path[1] &&
        token.path[2] === yOffsetToken.path[2] &&
        token.attributes.category === "size" &&
        token.attributes.type === "shadowSpread"
      );
    })[0];

    const colorToken = tokens.filter((token) => {
      return (
        token.path[0] === yOffsetToken.path[0] &&
        token.path[1] === yOffsetToken.path[1] &&
        token.attributes.category === "color" &&
        token.attributes.type === "shadow"
      );
    })[0];

    let style = {
      value: {
        x: xOffsetToken.value,
        y: yOffsetToken.value,
        blur: blurToken.value,
        spread: 0,
        color: colorToken.value,
      },
      type: type,
    };

    const styleKey =
      yOffsetToken.path[1] === "_"
        ? yOffsetToken.path[2]
        : yOffsetToken.path[1] + " " + yOffsetToken.path[2];
    object[styleKey] = style;
  });

  return object;
};

const typographyTransform = ({ tokens, type }) => {
  let object = {};

  const sizeTokens = tokens.filter((token) => {
    return (
      token.attributes.category === "size" && token.attributes.type === "font"
    );
  });

  sizeTokens.forEach((sizeToken) => {
    const weightTokens = tokens.filter((token) => {
      return (
        token.path[0] === sizeToken.path[0] &&
        token.attributes.category === "font" &&
        token.attributes.type === "name"
      );
    });

    const familyToken = tokens.filter((token) => {
      return (
        token.path[0] === sizeToken.path[0] &&
        token.attributes.category === "font" &&
        token.attributes.type === "family"
      );
    })[0];

    // TODO: Currently not supporting the 'long' line height.
    const lineHeightToken = tokens.filter((token) => {
      return (
        token.path[0] === sizeToken.path[0] &&
        token.attributes.category === "size" &&
        token.attributes.type === "lineHeight" &&
        token.attributes.item === sizeToken.attributes.item
      );
    })[0];

    weightTokens.forEach((weightToken) => {
      const style = {
        type: type,
        value: {
          fontFamily: familyToken.value,
          fontSize: sizeToken.value,
          fontWeight: weightToken.value,
          lineHeight: lineHeightToken.value,
        },
      };
      const categoryKey = `${sizeToken.path[0]} ${sizeToken.attributes.item}`;
      const styleKey = `${weightToken.attributes.item}`;

      if (!object[categoryKey]) {
        object[categoryKey] = { [styleKey]: style };
      } else {
        object[categoryKey][styleKey] = style;
      }
    });
  });

  return object;
};

const getTheme = (tokens) => {
  return {
    ...standardTransform({
      tokens,
      type: "spacing",
      filter: (token) =>
        token.attributes.category === "size" &&
        token.attributes.type === "spacing",
    }),
    ...standardTransform({
      tokens,
      type: "color",
      filter: (token) => token.attributes.category === "color",
    }),
    ...standardTransform({
      tokens,
      type: "borderRadius",
      filter: (token) =>
        token.attributes.category === "size" &&
        token.attributes.type === "borderRadius",
    }),
    ...standardTransform({
      tokens,
      type: "borderWidth",
      filter: (token) =>
        token.attributes.category === "size" &&
        token.attributes.type === "lineWidth",
    }),
    ...shadowTransform({
      tokens,
      type: "boxShadow",
    }),
    ...typographyTransform({
      tokens,
      type: "typography",
    }),
  };
};

module.exports = ({ dictionary, options }) => {
  const tokens = dictionary.allTokens;
  const theme = getTheme(tokens);

  if (options && options.theme) {
    return JSON.stringify({ [themeToTitleCase(options.theme)]: theme });
  }

  return JSON.stringify(theme);
};
