/**
 * Any of the brand colors we want to use in the UI are reassigned to new,
 * more semantic variables here. This has a handful of benefits, most noteable
 * is flexible theming-
 */

module.exports = {
  color: {
    // Just helpful.
    "lightest"                      : { value: "{color.grey-0.value}" },
    "darkest"                       : { value: "{color.grey-100.value}" },


    // NEUTRAL
    "neutral-0"                     : { value: "{color.grey-0.value}" },
    "neutral-5"                     : { value: "{color.grey-5.value}" },
    "neutral-10"                    : { value: "{color.grey-10.value}" },
    "neutral-20"                    : { value: "{color.grey-20.value}" },
    "neutral-30"                    : { value: "{color.grey-30.value}" },
    "neutral-40"                    : { value: "{color.grey-40.value}" },
    "neutral-50"                    : { value: "{color.grey-50.value}" },
    "neutral-60"                    : { value: "{color.grey-60.value}" },
    "neutral-70"                    : { value: "{color.grey-70.value}" },
    "neutral-80"                    : { value: "{color.grey-80.value}" },
    "neutral-90"                    : { value: "{color.grey-90.value}" },
    "neutral-100"                   : { value: "{color.grey-100.value}" },


    // INTERACTIVE
    "interactive"                   : { value: "{color.violet-60.value}" },
    "interactive-hover"             : { value: "{color.violet-70.value}"},
    "interactive-pressed"           : { value: "{color.violet-80.value}"},
    "interactive-inverse"           : { value: "{color.lightest.value}" },
    
    "interactive-secondary"         : { value: "{color.violet-60.value}" },
    "interactive-secondary-hover"   : { value: "{color.violet-70.value}"},
    "interactive-secondary-pressed" : { value: "{color.violet-80.value}"},
    "interactive-secondary-inverse" : { value: "{color.lightest.value}" },

    
    // POSITIVE
    "positive"                      : { value: "{color.green-60.value}" },
    "positive-hover"                : { value: "{color.green-70.value}"},
    "positive-pressed"              : { value: "{color.green-80.value}"},
    "positive-inverse"              : { value: "{color.lightest.value}"},

    "positive-secondary"            : { value: "{color.green-60.value}" },
    "positive-secondary-hover"      : { value: "{color.green-70.value}"},
    "positive-secondary-pressed"    : { value: "{color.green-80.value}"},
    "positive-secondary-inverse"    : { value: "{color.lightest.value}"},


    // WARNING
    "warning"                       : { value: "{color.yellow-60.value}" },
    "warning-hover"                 : { value: "{color.yellow-70.value}"},
    "warning-pressed"               : { value: "{color.yellow-80.value}"},
    "warning-inverse"               : { value: "{color.neutral-80.value}"},

    "warning-secondary"             : { value: "{color.yellow-60.value}" },
    "warning-secondary-hover"       : { value: "{color.yellow-70.value}"},
    "warning-secondary-pressed"     : { value: "{color.yellow-80.value}"},
    "warning-secondary-inverse"     : { value: "{color.neutral-80.value}"},

    
    // NEGATIVE
    "negative"                      : { value: "{color.red-60.value}" },
    "negative-hover"                : { value: "{color.red-70.value}"},
    "negative-pressed"              : { value: "{color.red-80.value}"},
    "negative-inverse"              : { value: "{color.lightest.value}"},

    "negative-secondary"            : { value: "{color.red-60.value}" },
    "negative-secondary-hover"      : { value: "{color.red-70.value}"},
    "negative-secondary-pressed"    : { value: "{color.red-80.value}"},
    "negative-secondary-inverse"    : { value: "{color.lightest.value}"},
  }
};
