const getDeclaration = ({ token, dictionary }) => {
  let declaration = {};

  const reference = dictionary.getReferences(token.original.value)[0];
  const name = token.path
    .filter((item) => item !== "DEFAULT")
    .slice(1)
    .join("-");

  // Text colors
  if (token.path[1] === "text") {
    if (token.path[2] === "color") {
      declaration[name] = { color: `var(--${reference.name})}` };
    }
  }
  if (token.path[1] === "border") {
    if (token.path[2] === "width") {
      declaration[name] = { borderWidth: `var(--${reference.name})}` };
    }
    if (token.path[2] === "color") {
      declaration[name] = { borderColor: `var(--${reference.name})}` };
    }
    if (token.path[2] === "radius") {
      declaration[name] = { borderRadius: `var(--${reference.name})}` };
    }
  }

  return declaration;
};

const flattenElements = ({ dictionary }) => {
  return dictionary.allTokens
    .filter((token) => token.path[0] === "elements")
    .map((token) => {
      return getDeclaration({ token, dictionary });
    })
    .reduce((obj, item) => {
      console.log(item[Object.keys(item)[0]]);
      obj[Object.keys(item)[0]] = item[Object.keys(item)[0]];
      return obj;
    }, {});
};

module.exports = ({ dictionary, outputReferences = false }) => {
  const elements = flattenElements({ dictionary });
  return elements;
};
