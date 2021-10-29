module.exports = {
  source: ["tokens/**/*.js"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "brand.css",
          format: "css/variables",
          filter: (token) => {
            return token.filePath.indexOf(`brand.`) > -1;
          },
        },
        {
          destination: "ui.css",
          format: "css/variables",
          filter: (token) => {
            return token.filePath.indexOf(`ui.`) > -1;
          },
        },
      ],
      options: {
        outputReferences: false, // Uses variables as values rather than interpolating them
      },
    },
    android: {
      transformGroup: "android",
      buildPath: "build/android/",
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
