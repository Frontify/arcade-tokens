module.exports = (tokens) => {
  const TYPE = "typography";

  // Body
  const body = tokens.body;
  const bodyFamily = body["family"].value;
  const bodyWeight = body["weight-name"].value;
  const bodyWeightStrong = body["weight-strong-name"].value;
  const bodyWeightXStrong = body["weight-x-strong-name"].value;

  const bodySizeSmall = body["size-small"].value;
  const bodySizeMedium = body["size-medium"].value;
  const bodySizeLarge = body["size-large"].value;

  const bodyLineHeightSmall = body["size-small-line-height"].value;
  const bodyLineHeightMedium = body["size-medium-line-height"].value;
  const bodyLineHeightLarge = body["size-large-line-height"].value;

  // Heading
  const heading = tokens.heading;
  const headingFamily = heading["family"].value;
  const headingWeight = heading["weight-name"].value;
  const headingWeightStrong = heading["weight-strong-name"].value;

  const headingSizeMedium = heading["size-medium"].value;
  const headingSizeLarge = heading["size-large"].value;
  const headingSizeXLarge = heading["size-x-large"].value;

  const headingLineHeightMedium = heading["size-medium-line-height"].value;
  const headingLineHeightLarge = heading["size-large-line-height"].value;
  const headingLineHeightXLarge = heading["size-large-line-height"].value;

  // Code
  const code = tokens.code;
  const codeFamily = code["family"].value;
  const codeWeight = code["weight-name"].value;
  const codeWeightStrong = code["weight-strong-name"].value;

  const codeSizeSmall = code["size-small"].value;
  const codeSizeMedium = code["size-medium"].value;
  const codeSizeLarge = code["size-large"].value;

  const codeLineHeightSmall = code["size-small-line-height"].value;
  const codeLineHeightMedium = code["size-medium-line-height"].value;
  const codeLineHeightLarge = code["size-large-line-height"].value;

  return {
    Body: {
      Small: {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeSmall,
          fontWeight: bodyWeight,
          lineHeight: bodyLineHeightSmall,
        },
      },
      "Small Strong": {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeSmall,
          fontWeight: bodyWeightStrong,
          lineHeight: bodyLineHeightSmall,
        },
      },
      "Small X-Strong": {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeSmall,
          fontWeight: bodyWeightXStrong,
          lineHeight: bodyLineHeightSmall,
        },
      },
      Medium: {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeMedium,
          fontWeight: bodyWeight,
          lineHeight: bodyLineHeightMedium,
        },
      },
      "Medium Strong": {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeMedium,
          fontWeight: bodyWeightStrong,
          lineHeight: bodyLineHeightMedium,
        },
      },
      "Medium X-Strong": {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeMedium,
          fontWeight: bodyWeightXStrong,
          lineHeight: bodyLineHeightMedium,
        },
      },
      Large: {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeLarge,
          fontWeight: bodyWeight,
          lineHeight: bodyLineHeightLarge,
        },
      },
      "Large Strong": {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeLarge,
          fontWeight: bodyWeightStrong,
          lineHeight: bodyLineHeightLarge,
        },
      },
      "Large X-Strong": {
        type: TYPE,
        value: {
          fontFamily: bodyFamily,
          fontSize: bodySizeLarge,
          fontWeight: bodyWeightXStrong,
          lineHeight: bodyLineHeightLarge,
        },
      },
    },
    Heading: {
      Medium: {
        type: TYPE,
        value: {
          fontFamily: headingFamily,
          fontSize: headingSizeMedium,
          fontWeight: headingWeight,
          lineHeight: headingLineHeightMedium,
        },
      },
      "Medium Strong": {
        type: TYPE,
        value: {
          fontFamily: headingFamily,
          fontSize: headingSizeMedium,
          fontWeight: headingWeightStrong,
          lineHeight: headingLineHeightMedium,
        },
      },
      Large: {
        type: TYPE,
        value: {
          fontFamily: headingFamily,
          fontSize: headingSizeLarge,
          fontWeight: headingWeight,
          lineHeight: headingLineHeightLarge,
        },
      },
      "Large Strong": {
        type: TYPE,
        value: {
          fontFamily: headingFamily,
          fontSize: headingSizeLarge,
          fontWeight: headingWeightStrong,
          lineHeight: headingLineHeightLarge,
        },
      },

      "X-Large": {
        type: TYPE,
        value: {
          fontFamily: headingFamily,
          fontSize: headingSizeXLarge,
          fontWeight: headingWeight,
          lineHeight: headingLineHeightXLarge,
        },
      },
      "X-Large Strong": {
        type: TYPE,
        value: {
          fontFamily: headingFamily,
          fontSize: headingSizeXLarge,
          fontWeight: headingWeightStrong,
          lineHeight: headingLineHeightXLarge,
        },
      },
    },
    Code: {
      Small: {
        type: TYPE,
        value: {
          fontFamily: codeFamily,
          fontSize: codeSizeSmall,
          fontWeight: codeWeight,
          lineHeight: codeLineHeightSmall,
        },
      },
      "Small Strong": {
        type: TYPE,
        value: {
          fontFamily: codeFamily,
          fontSize: codeSizeSmall,
          fontWeight: codeWeightStrong,
          lineHeight: codeLineHeightSmall,
        },
      },
      Medium: {
        type: TYPE,
        value: {
          fontFamily: codeFamily,
          fontSize: codeSizeMedium,
          fontWeight: codeWeight,
          lineHeight: codeLineHeightMedium,
        },
      },
      "Medium Strong": {
        type: TYPE,
        value: {
          fontFamily: codeFamily,
          fontSize: codeSizeMedium,
          fontWeight: codeWeightStrong,
          lineHeight: codeLineHeightMedium,
        },
      },

      Large: {
        type: TYPE,
        value: {
          fontFamily: codeFamily,
          fontSize: codeSizeLarge,
          fontWeight: codeWeight,
          lineHeight: codeLineHeightLarge,
        },
      },
      "Large Strong": {
        type: TYPE,
        value: {
          fontFamily: codeFamily,
          fontSize: codeSizeLarge,
          fontWeight: codeWeightStrong,
          lineHeight: codeLineHeightLarge,
        },
      },
    },
  };
};
