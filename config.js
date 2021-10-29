const inputDirectory = "input";
const outputDirectory = "output";

// Set Checks
const isUi = (token) => {
  return token.filePath.indexOf(`ui.`) > -1;
};
const isBrand = (token) => {
  return token.filePath.indexOf(`brand.`) > -1;
};

// Category Checks
const isFontCategory = (token) => {
  return token.attributes.category === "font";
};
const isSizeCategory = (token) => {
  return token.attributes.category === "size";
};
const isColorCategory = (token) => {
  return token.attributes.category === "color";
};

// Type Checks
const isFontType = (token) => {
  return token.attributes.type === "font";
};
const isSpacingType = (token) => {
  return token.attributes.type === "spacing";
};

// Combined Checks
const isFontSize = (token) => {
  return isSizeCategory(token) && isFontType(token);
};
const isTypography = (token) => {
  return isFontCategory(token) || isFontSize(token);
};
const isSpacing = (token) => {
  return isSizeCategory(token) && isSpacingType(token);
};

module.exports = {
  source: [inputDirectory + "/**/*.js"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: outputDirectory + "/css/",
      files: [
        {
          destination: "brand.typography.css",
          format: "css/variables",
          filter: (token) => {
            return isTypography(token) && isBrand(token);
          },
        },
        {
          destination: "ui.typography.css",
          format: "css/variables",
          filter: (token) => {
            return isTypography(token) && isUi(token);
          },
        },
        {
          destination: "brand.colors.css",
          format: "css/variables",
          filter: (token) => {
            return isColorCategory(token) && isBrand(token);
          },
        },
        {
          destination: "ui.colors.css",
          format: "css/variables",
          filter: (token) => {
            return isColorCategory(token) && isUi(token);
          },
        },
        {
          destination: "ui.spacing.css",
          format: "css/variables",
          filter: (token) => {
            return isSpacing(token) && isUi(token);
          },
        },
      ],
      options: {
        outputReferences: false, // Uses variables as values rather than interpolating them
      },
    },
    android: {
      transformGroup: "android",
      buildPath: outputDirectory + "/android/",
      files: [
        {
          destination: "font_dimens.xml",
          format: "android/fontDimens",
        },
        {
          destination: "colors.xml",
          format: "android/colors",
        },
      ],
    },
  },
};
