const TYPE = "typography";

/**
 * =============
 * CODE
 * =============
 */
const code = (tokens) => {
  if (!tokens.code) return null;

  const codeDefault = {
    fontFamily: tokens.code["family"].value,
    fontSize: tokens.code["size-small"].value,
    fontWeight: tokens.code["weight-name"].value,
    lineHeight: tokens.code["size-small-line-height"].value,
  };

  const codeMediumDefault = {
    ...codeDefault,
    ...{
      fontSize: tokens.code["size-medium"].value,
      lineHeight: tokens.code["size-medium-line-height"].value,
    },
  };

  const codeLargeDefault = {
    ...codeDefault,
    ...{
      fontSize: tokens.code["size-large"].value,
      lineHeight: tokens.code["size-large-line-height"].value,
    },
  };

  return {
    "code-size-small": {
      "weight-DEFAULT": { type: TYPE, value: codeDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...codeDefault,
          ...{ fontWeight: tokens.code["weight-strong-name"].value },
        },
      },
    },
    "code-size-medium": {
      "weight-DEFAULT": { type: TYPE, value: codeMediumDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...codeMediumDefault,
          ...{ fontWeight: tokens.code["weight-strong-name"].value },
        },
      },
    },
    "code-size-large": {
      "weight-DEFAULT": { type: TYPE, value: codeLargeDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...codeLargeDefault,
          ...{ fontWeight: tokens.code["weight-strong-name"].value },
        },
      },
    },
  };
};

/**
 * =============
 * HEADING
 * =============
 */
const heading = (tokens) => {
  if (!tokens.heading) return null;

  const headingDefault = {
    fontFamily: tokens.heading["family"].value,
    fontSize: tokens.heading["size-small"].value,
    fontWeight: tokens.heading["weight-name"].value,
    lineHeight: tokens.heading["size-small-line-height"].value,
  };

  const headingMediumDefault = {
    ...headingDefault,
    ...{
      fontSize: tokens.heading["size-medium"].value,
      lineHeight: tokens.heading["size-medium-line-height"].value,
    },
  };

  const headingLargeDefault = {
    ...headingDefault,
    ...{
      fontSize: tokens.heading["size-large"].value,
      lineHeight: tokens.heading["size-large-line-height"].value,
    },
  };

  return {
    "heading-size-small": {
      "weight-DEFAULT": { type: TYPE, value: headingDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...headingDefault,
          ...{ fontWeight: tokens.heading["weight-strong-name"].value },
        },
      },
    },
    "heading-size-medium": {
      "weight-DEFAULT": { type: TYPE, value: headingMediumDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...headingMediumDefault,
          ...{ fontWeight: tokens.heading["weight-strong-name"].value },
        },
      },
    },
    "heading-size-large": {
      "weight-DEFAULT": { type: TYPE, value: headingLargeDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...headingLargeDefault,
          ...{ fontWeight: tokens.heading["weight-strong-name"].value },
        },
      },
    },
  };
};

/**
 * =============
 * BODY
 * =============
 */

const body = (tokens) => {
  if (!tokens.body) return null;

  const bodyDefault = {
    fontFamily: tokens.body["family"].value,
    fontSize: tokens.body["size-small"].value,
    fontWeight: tokens.body["weight-name"].value,
    lineHeight: tokens.body["size-small-line-height"].value,
  };

  const bodyMediumDefault = {
    ...bodyDefault,
    ...{
      fontSize: tokens.body["size-medium"].value,
      lineHeight: tokens.body["size-medium-line-height"].value,
    },
  };

  const bodyLargeDefault = {
    ...bodyDefault,
    ...{
      fontSize: tokens.body["size-large"].value,
      lineHeight: tokens.body["size-large-line-height"].value,
    },
  };

  return {
    "body-size-small": {
      "weight-DEFAULT": { type: TYPE, value: bodyDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...bodyDefault,
          ...{ fontWeight: tokens.body["weight-strong-name"].value },
        },
      },
      "weight-x-strong": {
        type: TYPE,
        value: {
          ...bodyDefault,
          ...{ fontWeight: tokens.body["weight-x-strong-name"].value },
        },
      },
    },
    "body-size-medium": {
      "weight-DEFAULT": { type: TYPE, value: bodyMediumDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...bodyMediumDefault,
          ...{ fontWeight: tokens.body["weight-strong-name"].value },
        },
      },

      "weight-x-strong": {
        type: TYPE,
        value: {
          ...bodyMediumDefault,
          ...{ fontWeight: tokens.body["weight-x-strong-name"].value },
        },
      },
    },
    "body-size-large": {
      "weight-DEFAULT": { type: TYPE, value: bodyLargeDefault },
      "weight-strong": {
        type: TYPE,
        value: {
          ...bodyLargeDefault,
          ...{ fontWeight: tokens.body["weight-strong-name"].value },
        },
      },

      "weight-x-strong": {
        type: TYPE,
        value: {
          ...bodyLargeDefault,
          ...{ fontWeight: tokens.body["weight-x-strong-name"].value },
        },
      },
    },
  };
};

module.exports = ({ dictionary }) => {
  const tokens = dictionary.tokens;
  return { ...body(tokens), ...heading(tokens), ...code(tokens) };
};
