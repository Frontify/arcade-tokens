module.exports = {
  body: {
    family : { value: "{font.spaceGrotesk._.value}" },
    familyStack: { value: ["{body.family.value}", 'Arial', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'] },
    weight: {
      _ : { value: "{body.weight.1.value}" },
      1 : { value: "{font.spaceGrotesk.regular.weight.value}" },
      2 : { value: "{font.spaceGrotesk.medium.weight.value}" },
      3 : { value: "{font.spaceGrotesk.semiBold.weight.value}" },
      4 : { value: "{font.spaceGrotesk.bold.weight.value}" },
    },
    size: {
      _ : { value: "{body.size.medium._.value}", attributes: {category: "font", type: "size"} },
      small: {
        _              : { value: 1, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 1 },
        lineHeightLong : { value: 1 }
      },
      medium: {
        _              : { value: 2, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 2 },
        lineHeightLong : { value: 2 }
      },
      large: {
        _              : { value: 2, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 2 },
        lineHeightLong : { value: 2 }
      },
    }
  },
  heading: {
    family : { value: "{font.spaceGrotesk._.value}" },
    familyStack : { value: ["{heading.family.value}", 'Arial', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol'] },
    weight: {
      _ : { value: "{heading.weight.1.value}" },
      1 : { value: "{font.spaceGrotesk.regular.weight.value}" },
      2 : { value: "{font.spaceGrotesk.medium.weight.value}" },
      3 : { value: "{font.spaceGrotesk.semiBold.weight.value}" },
      4 : { value: "{font.spaceGrotesk.bold.weight.value}" },
    },
    size: {
      _ : { value: "{heading.size.medium._.value}", attributes: {category: "font", type: "size"} },
      small: {
        _              : { value: 1, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 1 },
        lineHeightLong : { value: 1 }
      },
      medium: {
        _              : { value: 2, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 2 },
        lineHeightLong : { value: 2 }
      },
      large: {
        _              : { value: 2, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 2 },
        lineHeightLong : { value: 2 }
      },
    }
  },
  code: {
    family : { value: "{font.menlo._.value}" },
    familyStack : { value: ["{code.family.value}", 'Arial', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji','Segoe UI Symbol'] },
    weight: {
      _ : { value: "{code.weight.1.value}" },
      1 : { value: "{font.menlo.regular.weight.value}" },
      2 : { value: "{font.menlo.bold.weight.value}" },
    },
    size: {
      _ : { value: "{code.size.medium._.value}", attributes: {category: "font", type: "size"} },
      small: {
        _              : { value: 1, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 1 },
        lineHeightLong : { value: 1 }
      },
      medium: {
        _              : { value: 2, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 2 },
        lineHeightLong : { value: 2 }
      },
      large: {
        _              : { value: 2, attributes: {category: "font", type: "size"} },
        lineHeight     : { value: 2 },
        lineHeightLong : { value: 2 }
      },
    }
  },
}