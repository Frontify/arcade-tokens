module.exports = (tokens) => {
  return {
    Base: {
      "DEFAULT" : tokens.base["color"].value,
      "Alt"     : tokens.base["color-alt"].value,
    },
    Text: {
      "DEFAULT"     : tokens.text["color"].value,
      "Weak"        : tokens.text["color-weak"].value,
      "X-Weak"      : tokens.text["color-x-weak"].value,
      "Interactive" : tokens.text["color-interactive"].value,
      "Disabled"    : tokens.text["color-disabled"].value,
      "Positive"    : tokens.text["color-positive"].value,
      "Negative"    : tokens.text["color-negative"].value,
      "Warning"     : tokens.text["color-warning"].value,
    },
    Border: {
      "DEFAULT"   : tokens.border["color"].value,
      "Weak"      : tokens.border["color-weak"].value,
      "Strong"    : tokens.border["color-strong"].value,
      "X-Strong"  : tokens.border["color-x-strong"].value,
      "XX-Strong" : tokens.border["color-xx-strong"].value,
    },
    Highlight: {
      "DEFAULT"             : tokens.highlight["color"].value,
      "DEFAULT Inverse"     : tokens.highlight["color-inverse"].value,
      "Interactive"         : tokens.highlight["color-interactive"].value,
      "Interactive Inverse" : tokens.highlight["color-interactive-inverse"].value,
      "Positive"            : tokens.highlight["color-positive"].value,
      "Positive Inverse"    : tokens.highlight["color-positive-inverse"].value,
      "Negative"            : tokens.highlight["color-negative"].value,
      "Negative Inverse"    : tokens.highlight["color-negative-inverse"].value,
      "Warning"             : tokens.highlight["color-warning"].value,
      "Warning Inverse"     : tokens.highlight["color-warning-inverse"].value,
      "Strong"              : tokens.highlight["color-strong"].value,
      "Strong Inverse"      : tokens.highlight["color-strong-inverse"].value,
    },
    Button: {
      "DEFAULT"                 : tokens.button["color"].value,
      "DEFAULT Hover"           : tokens.button["color-hover"].value,
      "DEFAULT Pressed"         : tokens.button["color-pressed"].value,
      "DEFAULT Inverse"         : tokens.button["color-inverse"].value,
      "DEFAULT Border"          : tokens.button["border-color"].value,
      "DEFAULT Border Hover"    : tokens.button["border-color-hover"].value,
      "DEFAULT Border Pressed"  : tokens.button["border-color-pressed"].value,
      "Strong"                  : tokens.button["strong-color"].value,
      "Strong Hover"            : tokens.button["strong-color-hover"].value,
      "Strong Pressed"          : tokens.button["strong-color-pressed"].value,
      "Strong Inverse"          : tokens.button["strong-color-inverse"].value,
      "Interactive"             : tokens.button["interactive-color"].value,
      "Interactive Hover"       : tokens.button["interactive-color-hover"].value,
      "Interactive Pressed"     : tokens.button["interactive-color-pressed"].value,
      "Interactive Inverse"     : tokens.button["interactive-color-inverse"].value,
      "Positive"                : tokens.button["positive-color"].value,
      "Positive Hover"          : tokens.button["positive-color-hover"].value,
      "Positive Pressed"        : tokens.button["positive-color-pressed"].value,
      "Positive Inverse"        : tokens.button["positive-color-inverse"].value,
      "Negative"                : tokens.button["negative-color"].value,
      "Negative Hover"          : tokens.button["negative-color-hover"].value,
      "Negative Pressed"        : tokens.button["negative-color-pressed"].value,
      "Negative Inverse"        : tokens.button["negative-color-inverse"].value,
      "Disabled"                : tokens.button["disabled-color"].value,
      "Disabled Inverse"        : tokens.button["disabled-color-inverse"].value,
      "Disabled Strong"         : tokens.button["disabled-strong-color"].value,
      "Disabled Strong Inverse" : tokens.button["disabled-strong-color-inverse"].value,
    },
    "Lightest & Darkest": {
      "Lightest" : tokens.color["lightest"].value,
      "Darkest"  : tokens.color["darkest"].value,
    },
  };
};
