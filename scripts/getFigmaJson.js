const themeToTitleCase = (string) => {
  return string
    .toLowerCase()
    .split(".")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const pascalToTitleCase = (string) => {
  let splitUp = string.replace(/([A-Z])/g, " $1");
  let titleCase = splitUp.charAt(0).toUpperCase() + splitUp.slice(1);
  return titleCase;
};

const getTree = ({ node, options }) => {
  let tree = {};
  if (node.hasOwnProperty("value")) {
    return getTokenDefinition(node);
  }
  for (key in node) {
    const name = pascalToTitleCase(key).replace("_", "DEFAULT");
    tree[name] = getTree({
      node: node[key],
    });
  }
  return tree;
};

const getTokenDefinition = (token) => {
  const tokenCategory = token.attributes.category;
  const tokenType = token.attributes.type;

  let outputType = tokenType;

  // Font
  if (tokenCategory === "font") {
    if (tokenType === "weight") {
      outputType = "fontWeights";
    } else if (tokenType === "family") {
      outputType = "fontFamilies";
    }
  }
  // Color
  else if (tokenCategory === "color") {
    outputType = "color";
  }
  // Size
  else if (tokenCategory === "size") {
    if (tokenType === "spacing") {
      outputType = "spacing";
    } else if (tokenType === "font") {
      outputType = "fontSizes";
    } else if (tokenType === "lineWidth") {
      outputType = "borderWidth";
    } else if (tokenType === "borderRadius") {
      outputType = "borderRadius";
    } else if (tokenType === "letterSpacing") {
      outputType = "letterSpacing";
    } else if (tokenType === "lineHeight") {
      outputType = "lineHeights";
    }
  }
  // Shadow
  else if (tokenCategory === "shadow") {
    outputType = "boxShadow";
  }
  // Fallback
  else {
    outputType = "other";
  }

  return {
    type: outputType,
    value: token.value,
  };
};

module.exports = ({ dictionary, options }) => {
  let node = dictionary.tokens;
  if (options && options.theme) {
    node = {
      [themeToTitleCase(options.theme)]: dictionary.tokens,
    };
  }
  const tokens = JSON.stringify(getTree({ node, options }));
  // const response = { ...tokens, ...getTypography(tokens) };
  return JSON.stringify(getTree({ node, options }));
};
