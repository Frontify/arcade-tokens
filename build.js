/**
 * MODULES
 */
const StyleDictionary = require("style-dictionary");
const { fileHeader } = StyleDictionary.formatHelpers;
const fs = require("fs");
const getTailwindFormat = require("./scripts/getTailwindPlugin");
const getTailwindPlugin = require("./scripts/getTailwindPlugin");
const getTailwindTheme = require("./scripts/getTailwindTheme");

/**
 * FILE SYSTEM
 */
const inputDirectory = "input/";
const outputDirectory = "output/";
const tokenFiles = fs.readdirSync(inputDirectory);

const brandColorsPath = inputDirectory + "brand.colors.js";
const brandTypographyPath = inputDirectory + "brand.typography.js";
const uiColorsPath = inputDirectory + "ui.colors.js";
const uiElementsPath = inputDirectory + "ui.elements.js";
const uiSizingPath = inputDirectory + "ui.sizing.js";
const uiTypographyPath = inputDirectory + "ui.typography.js";
const uiTailwindPath = inputDirectory + "ui.tailwind.js";
const uiThemesGlob = inputDirectory + "ui.theme.*.js";

const mainSourceGlobs = [
  brandColorsPath,
  brandTypographyPath,
  uiColorsPath,
  uiElementsPath,
  uiSizingPath,
  uiTypographyPath,
  uiThemesGlob,
];

/**
 * THEMES
 * - Gets the names of the color themes from the filesystem
 */
const colorThemes = tokenFiles
  .filter((file) => file.indexOf(".theme.") > -1)
  .map((file) => {
    return file.replace("ui.theme.", "").replace(".js", "");
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
  source: mainSourceGlobs,
  transformGroup: {
    tailwind: ["attribute/cti", "name/cti/kebab", "size/px", "color/css"],
  },
  format: {
    tailwind: ({ dictionary, options, file }) => {
      return getTailwindFormat({ dictionary, options, file });
    },
  },
  platforms: {
    tailwind: {
      transformGroup: "tailwind",
      buildPath: outputDirectory + "tailwind/",
      files: [
        {
          destination: "tailwind.config.js",
          format: "tailwind",
          filter: (token) => {
            return token.filePath === uiTailwindPath;
          },
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: outputDirectory + "css/",
      files: [
        {
          destination: "colors.css",
          format: "css/variables",
          filter: (token) => {
            return token.filePath === uiColorsPath;
          },
        },
        {
          destination: "typography.css",
          format: "css/variables",
          filter: (token) => {
            return token.filePath === uiTypographyPath;
          },
        },
        {
          destination: "sizes.css",
          format: "css/variables",
          filter: (token) => {
            return token.filePath === uiSizingPath;
          },
        },
        {
          destination: "elements.css",
          format: "css/variables",
          filter: (token) => {
            return token.filePath === uiElementsPath;
          },
          options: {
            outputReferences: true,
          },
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
    include: mainSourceGlobs,
    // Only output from the appropriate color theme file
    source: [uiThemesGlob],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: outputDirectory + "css/",
        files: [
          {
            destination: `theme.${theme}.css`,
            format: "css/variables",
            filter: (token) => {
              return token.filePath.indexOf(theme) > -1;
            },
          },
        ],
      },
    },
  }).buildAllPlatforms();
});
