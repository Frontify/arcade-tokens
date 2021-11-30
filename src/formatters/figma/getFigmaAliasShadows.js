module.exports = (tokens) => {
  if (!tokens.shadow) return null;
  const TYPE = "boxShadow";

  const shadowDefault = {
    x: tokens.shadow["offset-x"].value,
    y: tokens.shadow["offset-y"].value,
    blur: tokens.shadow["blur"].value,
    spread: tokens.shadow["spread"].value,
    color: tokens.shadow["color"].value,
  };

  return {
    DEFAULT: {
      type: TYPE,
      value: shadowDefault,
    },
    Top: {
      type: TYPE,
      value: {
        ...shadowDefault,
        ...{
          y: tokens.shadow["top-offset-y"].value,
          spread: tokens.shadow["top-spread"].value,
        },
      },
    },
    Bottom: {
      type: TYPE,
      value: {
        ...shadowDefault,
        ...{
          y: tokens.shadow["bottom-offset-y"].value,
          spread: tokens.shadow["bottom-spread"].value,
        },
      },
    },
    Large: {
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
