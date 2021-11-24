const isFontFamily = (token) => {
  return (
    token.attributes.category === "font" && token.attributes.type === "family"
  );
};
const isFontSize = (token) => {
  return (
    token.attributes.category === "size" && token.attributes.type === "font"
  );
};

const isFontWeight = (token) => {
  return (
    token.attributes.category === "font" && token.attributes.type === "name"
  );
};

const isLineHeight = (token) => {
  return (
    token.attributes.category === "size" &&
    token.attributes.type === "lineHeight"
  );
};

module.exports = {
  isTypeToken: (token) => {
    return (
      isFontFamily(token) ||
      isFontSize(token) ||
      isFontWeight(token) ||
      isLineHeight(token)
    );
  },
};
