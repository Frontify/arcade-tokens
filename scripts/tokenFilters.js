const isToken = (token) => {
  return token.filePath.indexOf("brand.") === -1;
};
const isColor = (token) => {
  return isToken(token) && token.attributes.category === "color";
};
const isTypography = (token) => {
  return isToken(token) && token.filePath.indexOf(".typography.") > -1;
};
const isSize = (token) => {
  return isToken(token) && token.filePath.indexOf(".sizing.") > -1;
};
const isElement = (token) => {
  return isToken(token) && token.filePath.indexOf(".elements.") > -1;
};
const isThickness = (token) => {
  return isToken(token) && token.attributes.type === "thickness";
};
