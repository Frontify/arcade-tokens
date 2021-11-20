/**
 * Here we make specific design decisions
 */

module.exports = {
  // General
  base: {
    color: {
      value: "{color.neutral.0.value}",
      attributes: { category: "color" },
    },
  },
  text: {
    color: {
      _: {
        value: "{color.neutral.80.value}",
        attributes: { category: "color" },
      },
      weak: {
        value: "{color.neutral.60.value}",
        attributes: { category: "color" },
      },
    },
  },
  line: {
    width: {
      _: { value: "1px", attributes: { category: "size", type: "lineWidth" } },
      strong: {
        value: "2px",
        attributes: { category: "size", type: "lineWidth" },
      },
    },
  },
  border: {
    color: {
      _: {
        value: "{color.neutral.20.value}",
        attributes: { category: "color" },
      },
      strong: {
        value: "{color.neutral.30.value}",
        attributes: { category: "color" },
      },
      xStrong: {
        value: "{color.neutral.80.value}",
        attributes: { category: "color" },
      },
    },
    width: {
      _: {
        value: "{line.width._.value}",
        attributes: { category: "size", type: "lineWidth" },
      },
      strong: {
        value: "{line.width.strong.value}",
        attributes: { category: "size", type: "lineWidth" },
      },
    },
    radius: {
      _: {
        value: "4px",
        attributes: { category: "size", type: "borderRadius" },
      },
      small: {
        value: "2px",
        attributes: { category: "size", type: "borderRadius" },
      },
      large: {
        value: "8px",
        attributes: { category: "size", type: "borderRadius" },
      },
      xLarge: {
        value: "12px",
        attributes: { category: "size", type: "borderRadius" },
      },
    },
  },

  shadow: {
    // Size
    _: {
      // Position
      _: {
        _: {
          value: "{shadow._._.offset.x.value} {shadow._._.offset.y.value} {shadow._.blur.value} {shadow._._.spread.value} {shadow._.color.value}",
          attributes: { type: "matrix" },
        },
        offset: {
          x: {
            value: 0,
            attributes: { category: "size", type: "shadowOffset", item: "x" },
          },
          y: {
            value: 0.1875,
            attributes: { category: "size", type: "shadowOffset", item: "y" },
          },
        },
        spread: {
          value: 0,
          attributes: { category: "size", type: "shadowSpread" },
        },
      },
      top: {
        _: {
          value: "{shadow._.top.offset.x.value} {shadow._.bottom.offset.y.value} {shadow._.blur.value} {shadow._.top.spread.value} {shadow._.color.value}",
          attributes: { type: "matrix" },
        },
        offset: {
          x: {
            value: "{shadow._._.offset.x.value}",
            attributes: { category: "size", type: "shadowOffset", item: "x", },
            
          },
          y: {
            value: -0.625,
            attributes: { category: "size", type: "shadowOffset", item: "y" },
          },
        },
        spread: {
          value: -0.3125,
          attributes: { category: "size", type: "shadowSpread" },
        },
      },
      bottom: {
        _: {
          value: "{shadow._.bottom.offset.x.value} {shadow._.bottom.offset.y.value} {shadow._.blur.value} {shadow._.bottom.spread.value} {shadow._.color.value}",
          attributes: { type: "matrix" },
        },
        offset: {
          x: {
            value: "{shadow._._.offset.x.value}",
            attributes: { category: "size", type: "shadowOffset", item: "x" },
          },
          y: {
            value: 0.625,
            attributes: { category: "size", type: "shadowOffset", item: "y" },
          },
        },
        spread: {
          value: -0.3125,
          attributes: { category: "size", type: "shadowSpread" },
        },
      },
      blur: {
        value: 0.625,
        attributes: { category: "size", type: "shadowBlur" },
      },
      color: {
        value: "{color.darkest.value}",
        attributes: { category: "color", type: "shadow" },
        modify: [{ type: "alpha", amount: 0.1 }],
      },
    },
    // Size
    large: {
      // Position (currently no alternative positions for large)
      _: {
        _: {
          value:
            "{shadow.large._.offset.x.value} {shadow.large._.offset.y.value} {shadow.large.blur.value} {shadow.large._.spread.value} {shadow.large.color.value}",
          attributes: { type: "matrix" },
        },
        offset: {
          x: {
            value: 0,
            attributes: { category: "size", type: "shadowOffset", item: "x" },
          },
          y: {
            value: 1.5625,
            attributes: { category: "size", type: "shadowOffset", item: "y" },
          },
        },
        spread: {
          value: 0,
          attributes: { category: "size", type: "shadowSpread" },
        },
      },
      blur: {
        value: 5,
        attributes: { category: "size", type: "shadowBlur" },
      },
      color: {
        value: "{color.darkest.value}",
        attributes: { category: "color", type: "shadow" },
        modify: [{ type: "alpha", amount: 0.4 }],
      },
    },
  },

  // Components
  checkbox: {
    border: {
      width: {
        value: "{border.width.strong.value}",
        attributes: { category: "size", type: "lineWidth" },
      },
    },
  },
  button: {
    background: {
      color: {
        value: "{color.neutral.50.value}",
        attributes: { category: "color" },
      },
    },
    border: {
      color: {
        value: "{color.neutral.50.value}",
        attributes: { category: "color" },
      }
    }
  },
  input: {
    placeholder: {
      color: {
        value: "{color.neutral.50.value}",
        attributes: { category: "color" },
      },
    },
    border: {
      color: {
        value: "{border.color._.value}",
        attributes: { category: "color" },
      },
    },
    label: {
      color: {
        value: "{text.color._.value}",
        attributes: { category: "color" },
      },
    },
  },
};
