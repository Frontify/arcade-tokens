/**
 * MODULES
 */
const StyleDictionary = require("style-dictionary");
const fs = require("fs");

/**
 * FILE SYSTEM
 */
const inputDirectory = "input/";
const inputExtension = "js";
const outputDirectory = "output/";
const tokenFiles = fs.readdirSync(inputDirectory);

/**
 * THEMES
 * - Gets the names of the color themes from the filesystem
 */
const colorThemeFiles = tokenFiles.filter(
  (file) =>
    file.indexOf(".theme.") > -1 &&
    file.indexOf(`.theme.${inputExtension}`) === -1
);
const colorThemes = colorThemeFiles.map((file) => {
  return file.replace("ui.theme.", "").replace(`.${inputExtension}`, "");
});

/**
 * FILTERS
 * - These are used in each file's configuration options to determine which tokens should
 * - be included in that file.
 */
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

/**
 * MAIN RUN
 * - Style dictionary does a deep merge of everything in input (except for theme files).
 * - This ensures that there are no naming collisions, and that references are respected.
 * -
 * - Each file applies a 'filter' to select which of those tokens it wants to include.
 * - This ensures that each file only contains the final, consumable tokens.
 */
StyleDictionary.extend({
  source: [
    `${inputDirectory}**/!(*.${colorThemes.join(`|*.`)}).${inputExtension}`,
  ],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: outputDirectory + "css/",
      files: [
        {
          destination: "colors.css",
          format: "css/variables",
          filter: (token) => {
            return isColor(token);
          },
        },
        {
          destination: "typography.css",
          format: "css/variables",
          filter: (token) => {
            return isTypography(token);
          },
        },
        {
          destination: "sizes.css",
          format: "css/variables",
          filter: (token) => {
            return isSize(token);
          },
        },
        {
          destination: "elements.css",
          format: "css/variables",
          filter: (token) => {
            return isElement(token);
          },
          // options: {
          //   outputReferences: true,
          // }
        },
      ],
    },
  },
}).buildAllPlatforms();

/**
 * COLOR THEMES
 * - style-dictionary will run once for each of the color themes, rather than all at once.
 * - This allows the same token names to be used in each of the output files, which suits the intended
 * - method of use (theme files used as overrides).
 * -
 * - The use of 'include' allows for all the references to be maintained, but a very selective 'source'
 * - and 'filter' on the output files ensures that only the theme tokens are output.
 */
colorThemes.forEach((theme) => {
  StyleDictionary.extend({
    // Include references from all files
    include: [
      `${inputDirectory}**/!(*.${colorThemes.join(`|*.`)}).${inputExtension}`,
    ],
    // Only output from the appropriate color theme file
    source: [`${inputDirectory}ui.theme.${theme}.${inputExtension}`],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: outputDirectory + "css/",
        files: [
          {
            destination: `theme.${theme}.css`,
            format: "css/variables",
            filter: (token) => {
              const isCurrentTheme = token.filePath.indexOf(theme) > -1;
              return isCurrentTheme;
            },
          },
        ],
      },
    },
  }).buildAllPlatforms();
});
