module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
      options: {
        // this will keep token references intact so that we don't need
        // to generate *all* color resources for dark mode, only
        // the specific ones that change
        outputReferences: true,
      },
    },
  },
};
