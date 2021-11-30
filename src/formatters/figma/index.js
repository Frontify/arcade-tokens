const toTitleCase = require("./toTitleCase");
const mergeDeep = require("./mergeDeep");

const formatThemeName = (string) => {
  return toTitleCase(string.toLowerCase().replace(".", " "));
};

const styles = (tokens) => {
  let returnObject = {};

  tokens.forEach((token) => {
    const category = toTitleCase(token.path[0]);
    const name = toTitleCase(
      token.path.slice(1).join(" ").replaceAll("-", " ")
    );
    const value = token.value;
    let type;

    if (
      token.attributes.category === "font" &&
      token.attributes.type === "style"
    ) {
      type = "typography";
    }

    if (
      token.attributes.category === "shadow" &&
      token.attributes.type === "style"
    ) {
      type = "boxShadow";
    }

    if (token.attributes.category === "color") {
      type = "color";
    }

    if (type) {
      returnObject = mergeDeep(returnObject, {
        [category]: { [name]: { value: value, type: type } },
      });
    }
  });
  return returnObject;
};

module.exports = ({ dictionary, options }) => {
  const tokens = dictionary.allTokens;

  if (options && options.theme) {
    return JSON.stringify({
      [formatThemeName(options.theme)]: styles(tokens),
    });
  }
  return JSON.stringify(styles(tokens));
};
