const themeToTitleCase = (string) => {
  return string
    .toLowerCase()
    .split(".")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const toKebabCase = (string) => {
  if (string && string.length > 1) {
    return string
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-");
  } else if (string) {
    return string;
  }
};

const toTitleCase = (string) => {
  return string.replace(/\w\S*/g, (text) => {
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  });
};

const pascalToTitleCase = (string) => {
  let splitUp = string.replace(/([A-Z])/g, " $1");
  let titleCase = splitUp.charAt(0).toUpperCase() + splitUp.slice(1);
  return titleCase;
};

const pascalToKebabCase = (string) => {
  return string.replace(/([A-Z])/g, "-$1").toLowerCase();
};

const getName = (token) => {
  const category = pascalToTitleCase(token.path[0]);
  const name = pascalToKebabCase(token.path.join("-")).replace("_", "DEFAULT");
  return category + "/" + name;
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
  // console.log(JSON.stringify(object, null, 4));

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
      const categoryKey = toTitleCase(
        toKebabCase(
          `${sizeToken.path[0]} ${sizeToken.attributes.item}`
        ).replace("_", "DEFAULT")
      );

      const styleKey = toKebabCase(`${weightToken.attributes.item}`).replace(
        "_",
        "DEFAULT"
      );

      if (!object[categoryKey]) {
        object[categoryKey] = { [styleKey]: style };
      } else {
        object[categoryKey][styleKey] = style;
      }
    });
  });

  return object;
};

module.exports = ({ dictionary, options }) => {
  const tokens = dictionary.allTokens;
  const theme = {
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

  if (options && options.theme) {
    return JSON.stringify({ [themeToTitleCase(options.theme)]: theme });
  }

  return JSON.stringify(theme);
};
