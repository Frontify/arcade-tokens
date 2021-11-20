const TYPE = "color";

/**
 * =============
 * BODY
 * =============
 */

const colors = (tokens) => {
  let colors = {};
  const mainColorTokens = tokens.filter((token) => {
    return token.path[0] === "color";
  });

  const elementColorTokens = tokens.filter((token) => {
    return token.path[0] !== "color" && token.attributes.category === "color";
  });

  elementColorTokens.forEach((token) => {
    const categoryKey = token.path[0];
    if (!colors[categoryKey]) {
      colors[categoryKey] = {
        [token.name]: { type: TYPE, value: token.value },
      };
    } else {
      colors[categoryKey][token.name] = { type: TYPE, value: token.value };
    }
  });

  mainColorTokens.forEach((token) => {
    const categoryKey = token.name.split("-")[1];
    if (!colors[categoryKey]) {
      colors[categoryKey] = {
        [token.name]: { type: TYPE, value: token.value },
      };
    } else {
      colors[categoryKey][token.name] = { type: TYPE, value: token.value };
    }
  });

  return colors;
};

module.exports = (tokens) => {
  return colors(tokens);
};
