module.exports = (tokens) => {
  const TYPE = 'color'
  return {
    Base: {
      "DEFAULT" : { value: tokens.base["color"].value, type: TYPE },
      "Alt"     : { value: tokens.base["color-alt"].value, type: TYPE },
    },
    Text: {
      "DEFAULT"     : { value: tokens.text["color"].value, type: TYPE },
      "Weak"        : { value: tokens.text["color-weak"].value, type: TYPE },
      "X-Weak"      : { value: tokens.text["color-x-weak"].value, type: TYPE },
      "Interactive" : { value: tokens.text["color-interactive"].value, type: TYPE },
      "Disabled"    : { value: tokens.text["color-disabled"].value, type: TYPE },
      "Positive"    : { value: tokens.text["color-positive"].value, type: TYPE },
      "Negative"    : { value: tokens.text["color-negative"].value, type: TYPE },
      "Warning"     : { value: tokens.text["color-warning"].value, type: TYPE },
    },
    Line: {
      "DEFAULT"   : { value: tokens.line["color"].value, type: TYPE },
      "Weak"      : { value: tokens.line["color-weak"].value, type: TYPE },
      "Strong"    : { value: tokens.line["color-strong"].value, type: TYPE },
      "X-Strong"  : { value: tokens.line["color-x-strong"].value, type: TYPE },
      "XX-Strong" : { value: tokens.line["color-xx-strong"].value, type: TYPE },
    },
    Highlight: {
      "DEFAULT"             : { value: tokens.highlight["color"].value, type: TYPE },
      "DEFAULT Inverse"     : { value: tokens.highlight["color-inverse"].value, type: TYPE },
      "Interactive"         : { value: tokens.highlight["interactive-color"].value, type: TYPE },
      "Interactive Inverse" : { value: tokens.highlight["interactive-color-inverse"].value, type: TYPE },
      "Positive"            : { value: tokens.highlight["positive-color"].value, type: TYPE },
      "Positive Inverse"    : { value: tokens.highlight["positive-color-inverse"].value, type: TYPE },
      "Negative"            : { value: tokens.highlight["negative-color"].value, type: TYPE },
      "Negative Inverse"    : { value: tokens.highlight["negative-color-inverse"].value, type: TYPE },
      "Warning"             : { value: tokens.highlight["warning-color"].value, type: TYPE },
      "Warning Inverse"     : { value: tokens.highlight["warning-color-inverse"].value, type: TYPE },
      "Strong"              : { value: tokens.highlight["strong-color"].value, type: TYPE },
      "Strong Inverse"      : { value: tokens.highlight["strong-color-inverse"].value, type: TYPE },
    },
    "Overlay": {
      "DEFAULT" : { value: tokens.overlay["color"].value, type: TYPE },
    },
  };
};
