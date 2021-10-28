const styleDictionary = require("style-dictionary");
const config = require("./config.json");
const colorThemes = ["light", "light-alternative", "dark", "dark-alternative"];

colorThemes.map((theme) => {
  for (platform in config.platforms) {
    const themeConfig = JSON.parse(JSON.stringify(config));
    themeConfig.platforms[platform].buildPath += theme + "/";
    styleDictionary.extend(themeConfig).buildAllPlatforms();
  }
});
