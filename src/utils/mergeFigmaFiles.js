const fs = require("fs");
const outputDirectory = "dist/";
const tempDirectory = "temp/";
const figmaTempDirectory = `${tempDirectory}figma/`;
const figmaOutputDirectory = `${outputDirectory}figma/`;

const enforceAliasOrder = {
  // Mostly colors
  Base: null,
  Text: null,
  Line: null,
  // Fonts styles
  Body: null,
  Heading: null,
  Code: null,
};

module.exports = () => {
  fs.readdir(figmaTempDirectory, (error, files) => {
    return new Promise((resolve, reject) => {
      if (error) reject(error);

      let aliases = {};
      let components = {};
      files.reverse().forEach((file) => {
        const content = fs.readFileSync(figmaTempDirectory + file, "utf8");
        if (file.indexOf("aliases") > -1) {
          aliases = { ...aliases, ...JSON.parse(content) };
        } else {
          components = { ...components, ...JSON.parse(content) };
        }
      });

      resolve({ aliases, components });
    }).then((data) => {
      if (!fs.existsSync(figmaOutputDirectory)) {
        fs.mkdirSync(figmaOutputDirectory);
      }
      data.aliases = Object.assign(enforceAliasOrder, data.aliases);
      fs.writeFileSync(
        `${figmaOutputDirectory}aliases.json`,
        JSON.stringify(data.aliases)
      );
      fs.writeFileSync(
        `${figmaOutputDirectory}components.json`,
        JSON.stringify(data.components)
      );
    });
  });
};
