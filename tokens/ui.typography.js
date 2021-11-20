module.exports = {
  body: {
    family: { value: "{font.spaceGrotesk._.value}", attributes: { category: "font", type: 'family' } },
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
      _: { 
        number: { value: "{font.spaceGrotesk.regular.weight.name.value}", attributes: { category: 'font', type: 'weight' } },
        name: { value: "{font.spaceGrotesk.regular.weight.name.value}", attributes: { category: 'font', type: 'name' } },
      },
      strong: { 
        number: { value: "{font.spaceGrotesk.medium.weight.number.value}", attributes: { category: 'font', type: 'weight' } },
        name: { value: "{font.spaceGrotesk.medium.weight.name.value}", attributes: { category: 'font', type: 'name' } },
      },
      xStrong: { 
        number: { value: "{font.spaceGrotesk.bold.weight.number.value}", attributes: { category: 'font', type: 'weight' } },
        name: { value: "{font.spaceGrotesk.bold.weight.name.value}", attributes: { category: 'font', type: 'name' } },
      },
    },
    size: {
      small: {
        _: { value: 0.875, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 1, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
      medium: {
        _: { value: 1, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 1.25, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 2, attributes: { category: "size", type: "lineHeight" } },
      },
      large: {
        _: { value: 1.125, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 1.5, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 2, attributes: { category: "size", type: "lineHeight" } },
      },
    },
  },
  heading: {
    family: { value: "{font.spaceGrotesk._.value}", attributes: { category: "font", type: 'family' } },
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
      _: { 
        number: { value: "{font.spaceGrotesk.medium.weight.name.value}", attributes: { category: 'font', type: 'weight' } },
        name: { value: "{font.spaceGrotesk.medium.weight.name.value}", attributes: { category: 'font', type: 'name' } },
      },
      strong: { 
        number: { value: "{font.spaceGrotesk.bold.weight.number.value}", attributes: { category: 'font', type: 'weight' } },
        name: { value: "{font.spaceGrotesk.bold.weight.name.value}", attributes: { category: 'font', type: 'name' } },
      },
    },
    size: {
      small: {
        _: {
          value: "{body.size.small._.value}",
          attributes: { category: "size", type: "font" },
        },
        lineHeight: { value: "{body.size.small.lineHeight.value}", attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
      medium: {
        _: {
          value: "{body.size.medium._.value}",
          attributes: { category: "size", type: "font" },
        },
        lineHeight: { value: "{body.size.medium.lineHeight.value}", attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
      large: {
        _: {
          value: "{body.size.large._.value}",
          attributes: { category: "size", type: "font" },
        },
        lineHeight: { value: "{body.size.large.lineHeight.value}", attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
      xLarge: {
        _: { value: 1.5, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 2, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
      xxLarge: {
        _: { value: 2, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 2.5, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
      xxxLarge: {
        _: { value: 4, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 3.5, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
    },
  },
  code: {
    family: { value: "{font.menlo._.value}", attributes: { category: "font", type: 'family' } },
    familyStack: {
      value: ["{code.family.value}", "Courier", "monospace"],
    },
    weight: {
      _: { 
        number: { value: "{font.menlo.regular.weight.name.value}", attributes: { category: 'font', type: 'weight' } },
        name: { value: "{font.menlo.regular.weight.name.value}", attributes: { category: 'font', type: 'name' } },
      },
      strong: { 
        number: { value: "{font.menlo.regular.weight.number.value}", attributes: { category: 'font', type: 'weight' } },
        name: { value: "{font.menlo.regular.weight.name.value}", attributes: { category: 'font', type: 'name' } },
      },
    },
    size: {
      small: {
        _: { value: 1, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 1, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 1, attributes: { category: "size", type: "lineHeight" } },
      },
      medium: {
        _: { value: 2, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 2, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 2, attributes: { category: "size", type: "lineHeight" } },
      },
      large: {
        _: { value: 2, attributes: { category: "size", type: "font" } },
        lineHeight: { value: 2, attributes: { category: "size", type: "lineHeight" } },
        lineHeightLong: { value: 2, attributes: { category: "size", type: "lineHeight" } },
      },
    },
  },
};
