module.exports = {
  body: {
    family : { value: "{font.spaceGrotesk._.value}" },
    weight: {
      _ : { value: "{body.weight.1.value}" },
      1 : { value: "{font.spaceGrotesk.regular.weight.value}" },
      2 : { value: "{font.spaceGrotesk.medium.weight.value}" },
      3 : { value: "{font.spaceGrotesk.semiBold.weight.value}" },
      4 : { value: "{font.spaceGrotesk.bold.weight.value}" },
    },
    size: {
      _ : { value: "{body.size.1._.value}" },
      1: {
        _              : { value: 1 },
        lineHeight     : { value: 1 },
        lineHeightLong : { value: 1 }
      },
    }
  },
  heading: {
    family : { value: "{font.spaceGrotesk._.value}" },
    weight: {
      _ : { value: "{heading.weight.1.value}" },
      1 : { value: "{font.spaceGrotesk.regular.weight.value}" },
      2 : { value: "{font.spaceGrotesk.medium.weight.value}" },
      3 : { value: "{font.spaceGrotesk.semiBold.weight.value}" },
      4 : { value: "{font.spaceGrotesk.bold.weight.value}" },
    },
    size: {
      _ : { value: "{heading.size.1._.value}" },
      1: {
        _              : { value: 1 },
        lineHeight     : { value: 1 },
        lineHeightLong : { value: 1 }
      },
    }
  },
  code: {
    family: { value: "{font.spaceGrotesk._.value}" },
    weight: {
      _ : { value: "{code.weight.1.value}" },
      1 : { value: "{font.spaceGrotesk.regular.weight.value}" },
      2 : { value: "{font.spaceGrotesk.bold.weight.value}" },
    },
    size: {
      _ : { value: "{code.size.1._.value}" },
      1: {
        _              : { value: 1 },
        lineHeight     : { value: 1 },
        lineHeightLong : { value: 1 }
      },
    }
  },
}