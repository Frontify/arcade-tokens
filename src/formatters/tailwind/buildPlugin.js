const getDeclaration = ({ token, dictionary }) => {
  let declaration = {};

  const reference = dictionary.getReferences(token.original.value)[0];
  const name = token.name;

  // Text
  if (token.path[0] === "text") {
    if (token.path[1] === "color") {
      declaration[`.${name}`] = reference
        ? { color: `var(--${reference.name})}` }
        : { color: token.value };
    }
  }

  return declaration;
};

const flattenElements = ({ dictionary }) => {
  return dictionary.allTokens
    .filter((token) => token.filePath.indexOf(".elements.") > -1)
    .map((token) => {
      return getDeclaration({ token, dictionary });
    })
    .reduce((obj, item) => {
      obj[Object.keys(item)[0]] = item[Object.keys(item)[0]];
      return obj;
    }, {});
};

module.exports = ({ dictionary, outputReferences = false }) => {
  const elements = flattenElements({ dictionary });
  return elements;
};
