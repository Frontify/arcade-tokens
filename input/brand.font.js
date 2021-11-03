/**
 * IMPORTANT
 * None of these tokens should be exported for use by design system adopters.
 * They are simply a palette of the values we use that make up out brand.
 */

module.exports = {
  font: {
    spaceGrotesk: {
      _: { value: "SpaceGroteskFrontify" },
      regular: {
        _: { value: "SpaceGroteskFrontifyRegular" },
        weight: {
          value: 400,
          attributes: { type: "weight" },
        },
      },
      medium: {
        _: { value: "SpaceGroteskFrontifyMedium" },
        weight: {
          value: 500,
          attributes: { type: "weight" },
        },
      },
      semiBold: {
        _: { value: "SpaceGroteskFrontifySemiBold" },
        weight: {
          value: 600,
          attributes: { type: "weight" },
        },
      },
      bold: {
        _: { value: "SpaceGroteskFrontifyBold" },
        weight: {
          value: 700,
          attributes: { type: "weight" },
        },
      },
    },
    menlo: {
      _: { value: "Menlo" },
      regular: {
        _: { value: "MenloRegular" },
        weight: {
          value: 400,
          attributes: { type: "weight" },
        },
      },
      bold: {
        _: { value: "MenloBold" },
        weight: {
          value: 700,
          attributes: { type: "weight" },
        },
      },
    },
  },
};
