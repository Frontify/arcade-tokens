/**
 * IMPORTANT
 * None of these tokens should be exported for use by design system adopters.
 * They are simply a palette of the values we use that make up out brand.
 */

module.exports = {
  font: {
    spaceGrotesk: {
      _: { value: "Space Grotesk Frontify" },
      regular: {
        _: { value: "Space Grotesk Frontify Regular" },
        weight: {
          number: { value: 400, attributes: { type: "weight" } },
          name: { value: "Regular", attributes: { type: "name" } }
        },
      },
      medium: {
        _: { value: "Space Grotesk Frontify Medium" },
        weight: {
          number: { value: 500, attributes: { type: "weight" } },
          name: { value: "Medium", attributes: { type: "name" } }
        },
      },
      semiBold: {
        _: { value: "Space Grotesk Frontify SemiBold" },
        weight: {
          number: { value: 600, attributes: { type: "weight" } },
          name: { value: "SemiBold", attributes: { type: "name" } }
        },
      },
      bold: {
        _: { value: "Space Grotesk Frontify Bold" },
        weight: {
          number: { value: 700, attributes: { type: "weight" } },
          name: { value: "Bold", attributes: { type: "name" } }
        },
      },
    },
    menlo: {
      _: { value: "Menlo" },
      regular: {
        _: { value: "Menlo Regular" },
        weight: {
          number: { value: 400, attributes: { type: "weight" } },
          name: { value: "Regular", attributes: { type: "name" } }
        },
      },
      bold: {
        _: { value: "Menlo Bold" },
        weight: {
          number: { value: 700, attributes: { type: "weight" } },
          name: { value: "Bold", attributes: { type: "name" } }
        },
      },
    },
  },
};
