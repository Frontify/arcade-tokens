const toTitleCase = require("./toTitleCase");
const mergeDeep = require("./mergeDeep");

const formatThemeName = (string) => {
  return toTitleCase(string.toLowerCase().replace(".", " "));
};

const styles = (tokens) => {
  let returnObject = {};

  tokens.forEach((token) => {
    let category = toTitleCase(token.path[0]);
    let name = toTitleCase(
      token.path.slice(1).join(" ").replaceAll("-", " ").replaceAll("_", "")
    );
    let value = token.value;
    let type;

    // Typography
    if (
      token.attributes.category === "font" &&
      token.attributes.type === "style"
    ) {
      name = name || "DEFAULT STYLE";
      type = "typography";
    }

    // Shadow
    if (
      token.attributes.category === "shadow" &&
      token.attributes.type === "style"
    ) {
      for (key in value) {
        value[key] = value[key].replace("px", "");
      }
      name = name || "DEFAULT SHADOW";
      type = "boxShadow";
    }

    // Colors
    if (token.attributes.category === "color") {
      // Format the Box tokens a bit nicer.
      if (token.path[0] === "box") {
        category += " " + name.split(" ")[0];
        name = name.split(" ").slice(1).join(" ");
      }
      name = name.replace("Color", "").trim().replace(/\s+/g, " ");
      name = name || "DEFAULT COLOR";
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
