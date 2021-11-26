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
    Border: {
      "DEFAULT"   : { value: tokens.border["color"].value, type: TYPE },
      "Weak"      : { value: tokens.border["color-weak"].value, type: TYPE },
      "Strong"    : { value: tokens.border["color-strong"].value, type: TYPE },
      "X-Strong"  : { value: tokens.border["color-x-strong"].value, type: TYPE },
      "XX-Strong" : { value: tokens.border["color-xx-strong"].value, type: TYPE },
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
    Button: {
      "DEFAULT"                 : { value: tokens.button["color"].value, type: TYPE },
      "DEFAULT Hover"           : { value: tokens.button["color-hover"].value, type: TYPE },
      "DEFAULT Pressed"         : { value: tokens.button["color-pressed"].value, type: TYPE },
      "DEFAULT Inverse"         : { value: tokens.button["color-inverse"].value, type: TYPE },
      "DEFAULT Border"          : { value: tokens.button["border-color"].value, type: TYPE },
      "DEFAULT Border Hover"    : { value: tokens.button["border-color-hover"].value, type: TYPE },
      "DEFAULT Border Pressed"  : { value: tokens.button["border-color-pressed"].value, type: TYPE },
      "Strong"                  : { value: tokens.button["strong-color"].value, type: TYPE },
      "Strong Hover"            : { value: tokens.button["strong-color-hover"].value, type: TYPE },
      "Strong Pressed"          : { value: tokens.button["strong-color-pressed"].value, type: TYPE },
      "Strong Inverse"          : { value: tokens.button["strong-color-inverse"].value, type: TYPE },
      "Interactive"             : { value: tokens.button["interactive-color"].value, type: TYPE },
      "Interactive Hover"       : { value: tokens.button["interactive-color-hover"].value, type: TYPE },
      "Interactive Pressed"     : { value: tokens.button["interactive-color-pressed"].value, type: TYPE },
      "Interactive Inverse"     : { value: tokens.button["interactive-color-inverse"].value, type: TYPE },
      "Positive"                : { value: tokens.button["positive-color"].value, type: TYPE },
      "Positive Hover"          : { value: tokens.button["positive-color-hover"].value, type: TYPE },
      "Positive Pressed"        : { value: tokens.button["positive-color-pressed"].value, type: TYPE },
      "Positive Inverse"        : { value: tokens.button["positive-color-inverse"].value, type: TYPE },
      "Negative"                : { value: tokens.button["negative-color"].value, type: TYPE },
      "Negative Hover"          : { value: tokens.button["negative-color-hover"].value, type: TYPE },
      "Negative Pressed"        : { value: tokens.button["negative-color-pressed"].value, type: TYPE },
      "Negative Inverse"        : { value: tokens.button["negative-color-inverse"].value, type: TYPE },
      "Disabled"                : { value: tokens.button["disabled-color"].value, type: TYPE },
      "Disabled Inverse"        : { value: tokens.button["disabled-color-inverse"].value, type: TYPE },
      "Disabled Border"         : { value: tokens.button["disabled-border-color"].value, type: TYPE },
      "Disabled Strong"         : { value: tokens.button["disabled-strong-color"].value, type: TYPE },
      "Disabled Strong Inverse" : { value: tokens.button["disabled-strong-color-inverse"].value, type: TYPE },
    },
    "Lightest & Darkest": {
      "Lightest" : { value: tokens.color["lightest"].value, type: TYPE },
      "Darkest"  : { value: tokens.color["darkest"].value, type: TYPE },
    },
    "Overlay": {
      "DEFAULT" : { value: tokens.overlay["color"].value, type: TYPE },
    },
  };
};
