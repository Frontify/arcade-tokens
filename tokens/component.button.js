/**
* BUTTON
* ======================================================================== */

module.exports = { 
  button: {
      // Default Style
    "background-color"                         : { value: "{color.neutral.10.value}", attributes: { category: "color" } },
    "background-color-hover"                   : { value: "{color.neutral.20.value}", attributes: { category: "color" } },
    "background-color-pressed"                 : { value: "{color.neutral.30.value}", attributes: { category: "color" } },
    "icon-color"                               : { value: "{color.neutral.80.value}", attributes: { category: "color" } },
    "text-color"                               : { value: "{color.neutral.80.value}", attributes: { category: "color" } },
    "border-color"                             : { value: "{border.color-weak.value}", attributes: { category: "color" } },

    "negative-background-color"                : { value: "{button.background-color.value}", attributes: { category: "color" } },
    "negative-background-color-hover"          : { value: "{button.background-color-hover.value}", attributes: { category: "color" } },
    "negative-background-color-pressed"        : { value: "{button.background-color-pressed.value}", attributes: { category: "color" } },
    "negative-icon-color"                      : { value: "{text.color-negative.value}", attributes: { category: "color" } },
    "negative-text-color"                      : { value: "{button.background-color.value}", attributes: { category: "color" } },
    "negative-border-color"                    : { value: "{border.color-weak.value}", attributes: { category: "color" } },

    "positive-background-color"                : { value: "{button.background-color.value}", attributes: { category: "color" } },
    "positive-background-color-hover"          : { value: "{button.background-color-hover.value}", attributes: { category: "color" } },
    "positive-background-color-pressed"        : { value: "{button.background-color-pressed.value}", attributes: { category: "color" } },
    "positive-icon-color"                      : { value: "{text.color-positive.value}", attributes: { category: "color" } },
    "positive-text-color"                      : { value: "{button.background-color.value}", attributes: { category: "color" } },
    "positive-border-color"                    : { value: "{border.color-weak.value}", attributes: { category: "color" } },
      
      // Strong Style
    "strong-background-color"                  : { value: "{color.neutral.70.value}", attributes: { category: "color" } },
    "strong-background-color-hover"            : { value: "{color.neutral.90.value}", attributes: { category: "color" } },
    "strong-background-color-pressed"          : { value: "{color.neutral.100.value}", attributes: { category: "color" } },
    "strong-text-color"                        : { value: "{color.neutral.0.value}", attributes: { category: "color" } },
    "strong-icon-color"                        : { value: "{color.neutral.0.value}", attributes: { category: "color" } },
    "strong-border-color"                      : { value: "{border.color-weak.value}", attributes: { category: "color" } },

    "strong-negative-background-color"         : { value: "{button.strong-background-color.value}", attributes: { category: "color" } },
    "strong-negative-background-color-hover"   : { value: "{button.strong-background-color-hover.value}", attributes: { category: "color" } },
    "strong-negative-background-color-pressed" : { value: "{button.strong-background-color-pressed.value}", attributes: { category: "color" } },
    "strong-negative-text-color"               : { value: "{button.strong-background-color.value}", attributes: { category: "color" } },
    "strong-negative-icon-color"               : { value: "{color.negative.50.value}", attributes: { category: "color" } },
    "strong-negative-border-color"             : { value: "{border.color-weak.value}", attributes: { category: "color" } },

    "strong-positive-background-color"         : { value: "{button.strong-background-color.value}", attributes: { category: "color" } },
    "strong-positive-background-color-hover"   : { value: "{button.strong-background-color-hover.value}", attributes: { category: "color" } },
    "strong-positive-background-color-pressed" : { value: "{button.strong-background-color-pressed.value}", attributes: { category: "color" } },
    "strong-positive-text-color"               : { value: "{button.strong-background-color.value}", attributes: { category: "color" } },
    "strong-positive-icon-color"               : { value: "{color.positive.50.value}", attributes: { category: "color" } },
    "strong-positive-border-color"             : { value: "{border.color-weak.value}", attributes: { category: "color" } },
      
      // Danger Style
    "danger-background-color"                  : { value: "{negative.color.value}", attributes: { category: "color" } },
    "danger-background-color-hover"            : { value: "{negative.color-hover.value}", attributes: { category: "color" } },
    "danger-background-color-pressed"          : { value: "{negative.color-pressed.value}", attributes: { category: "color" } },
    "danger-icon-color"                        : { value: "{negative.color-inverse.value}", attributes: { category: "color" } },
    "danger-text-color"                        : { value: "{negative.color-inverse.value}", attributes: { category: "color" } },
    "danger-border-color"                      : { value: "{border.color-weak.value}", attributes: { category: "color" } },
  },
};
