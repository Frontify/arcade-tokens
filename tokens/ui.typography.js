module.exports = {
  body: {
    family: { value: "{font.spaceGrotesk._.value}" },
    familyStack: {
      value: [
        "{body.family.value}",
        "Arial",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    weight: {
      _: { value: "{body.weight.1.value}" },
      1: { value: "{font.spaceGrotesk.regular.weight.value}" },
      2: { value: "{font.spaceGrotesk.medium.weight.value}" },
      3: { value: "{font.spaceGrotesk.semiBold.weight.value}" },
      4: { value: "{font.spaceGrotesk.bold.weight.value}" },
    },
    size: {
      _: {
        value: "{body.size.medium._.value}",
        attributes: { category: "font", type: "size" },
      },
      small: {
        _: { value: 0.875, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 1 },
        lineHeightLong: { value: 1 },
      },
      medium: {
        _: { value: 1, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 1.25 },
        lineHeightLong: { value: 2 },
      },
      large: {
        _: { value: 1.125, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 1.5 },
        lineHeightLong: { value: 2 },
      },
    },
  },
  heading: {
    family: { value: "{font.spaceGrotesk._.value}" },
    familyStack: {
      value: [
        "{heading.family.value}",
        "Arial",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    weight: {
      _: { value: "{heading.weight.1.value}" },
      1: { value: "{font.spaceGrotesk.regular.weight.value}" },
      2: { value: "{font.spaceGrotesk.medium.weight.value}" },
      3: { value: "{font.spaceGrotesk.semiBold.weight.value}" },
      4: { value: "{font.spaceGrotesk.bold.weight.value}" },
    },
    size: {
      _: {
        value: "{heading.size.small._.value}",
        attributes: { category: "font", type: "size" },
      },
      small: {
        _: {
          value: "{body.size.small._.value}",
          attributes: { category: "font", type: "size" },
        },
        lineHeight: { value: "{body.size.small.lineHeight.value}" },
        lineHeightLong: { value: 1 },
      },
      medium: {
        _: {
          value: "{body.size.medium._.value}",
          attributes: { category: "font", type: "size" },
        },
        lineHeight: { value: "{body.size.medium.lineHeight.value}" },
        lineHeightLong: { value: 1 },
      },
      large: {
        _: {
          value: "{body.size.large._.value}",
          attributes: { category: "font", type: "size" },
        },
        lineHeight: { value: "{body.size.large.lineHeight.value}" },
        lineHeightLong: { value: 1 },
      },
      xLarge: {
        _: { value: 1.5, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 2 },
        lineHeightLong: { value: 1 },
      },
      xxLarge: {
        _: { value: 2, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 2.5 },
        lineHeightLong: { value: 1 },
      },
      xxxLarge: {
        _: { value: 4, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 3.5 },
        lineHeightLong: { value: 1 },
      },
    },
  },
  code: {
    family: { value: "{font.menlo._.value}" },
    familyStack: {
      value: ["{code.family.value}", "Courier", "monospace"],
    },
    weight: {
      _: { value: "{code.weight.1.value}" },
      1: { value: "{font.menlo.regular.weight.value}" },
      2: { value: "{font.menlo.bold.weight.value}" },
    },
    size: {
      _: {
        value: "{code.size.medium._.value}",
        attributes: { category: "font", type: "size" },
      },
      small: {
        _: { value: 1, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 1 },
        lineHeightLong: { value: 1 },
      },
      medium: {
        _: { value: 2, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 2 },
        lineHeightLong: { value: 2 },
      },
      large: {
        _: { value: 2, attributes: { category: "font", type: "size" } },
        lineHeight: { value: 2 },
        lineHeightLong: { value: 2 },
      },
    },
  },
};
