const TYPE = "boxShadow";

/**
 * =============
 * BODY
 * =============
 */

const shadows = ({ tokens }) => {
  if (!tokens.shadow) return null;

  const shadowDefault = {
    x: tokens.shadow["offset-x"].value,
    y: tokens.shadow["offset-y"].value,
    blur: tokens.shadow["blur"].value,
    spread: tokens.shadow["spread"].value,
    color: tokens.shadow["color"].value,
  };

  return {
    "shadow-DEFAULT": {
      type: TYPE,
      value: shadowDefault,
    },
    "shadow-top": {
      type: TYPE,
      value: {
        ...shadowDefault,
        ...{
          y: tokens.shadow["top-offset-y"].value,
          spread: tokens.shadow["top-spread"].value,
        },
      },
    },
    "shadow-bottom": {
      type: TYPE,
      value: {
        ...shadowDefault,
        ...{
          y: tokens.shadow["bottom-offset-y"].value,
          spread: tokens.shadow["bottom-spread"].value,
        },
      },
    },
    "shadow-large": {
      type: TYPE,
      value: {
        x: tokens.shadow["large-offset-x"].value,
        y: tokens.shadow["large-offset-y"].value,
        blur: tokens.shadow["large-blur"].value,
        spread: tokens.shadow["large-spread"].value,
        color: tokens.shadow["large-color"].value,
      },
    },
  };
};

module.exports = ({ dictionary }) => {
  const tokens = dictionary.tokens;
  return shadows({ tokens });
};
