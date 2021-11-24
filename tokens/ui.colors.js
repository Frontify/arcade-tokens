/**
 * Any of the brand colors we want to use in the UI are reassigned to new,
 * more semantic variables here. This has a handful of benefits, most noteable
 * is flexible theming-
 */

module.exports = {
  color: {
    "lightest"        : { value: "{color.grey.0.value}" },
    "darkest"         : { value: "{color.grey.100.value}" },
    
    "neutral": {
      "0"       : { value: "{color.grey.0.value}" },
      "5"       : { value: "{color.grey.5.value}" },
      "10"      : { value: "{color.grey.10.value}" },
      "20"      : { value: "{color.grey.20.value}" },
      "30"      : { value: "{color.grey.30.value}" },
      "40"      : { value: "{color.grey.40.value}" },
      "50"      : { value: "{color.grey.50.value}" },
      "60"      : { value: "{color.grey.60.value}" },
      "70"      : { value: "{color.grey.70.value}" },
      "80"      : { value: "{color.grey.80.value}" },
      "90"      : { value: "{color.grey.90.value}" },
      "100"     : { value: "{color.grey.100.value}" },
    },

    "interactive": {
      "DEFAULT": { value: "{color.interactive.60.value}" },
      "10"  : { value: "{color.violet.10.value}" },
      "20"  : { value: "{color.violet.20.value}" },
      "30"  : { value: "{color.violet.30.value}" },
      "40"  : { value: "{color.violet.40.value}" },
      "50"  : { value: "{color.violet.50.value}" },
      "60"  : { value: "{color.violet.60.value}" },
      "70"  : { value: "{color.violet.70.value}" },
      "80"  : { value: "{color.violet.80.value}" },
      "90"  : { value: "{color.violet.90.value}" },
      "100" : { value: "{color.violet.100.value}" },
    },
    
    "positive": {
      "DEFAULT": { value: "{color.positive.70.value}" },
      "10"     : { value: "{color.green.10.value}" },
      "20"     : { value: "{color.green.20.value}" },
      "30"     : { value: "{color.green.30.value}" },
      "40"     : { value: "{color.green.40.value}" },
      "50"     : { value: "{color.green.50.value}" },
      "60"     : { value: "{color.green.60.value}" },
      "70"     : { value: "{color.green.70.value}" },
      "80"     : { value: "{color.green.80.value}" },
      "90"     : { value: "{color.green.90.value}" },
      "100"    : { value: "{color.green.100.value}" },
    },

    "warning": {
      "DEFAULT" : { value: "{color.warning.70.value}" },
      "10"      : { value: "{color.yellow.10.value}" },
      "20"      : { value: "{color.yellow.20.value}" },
      "30"      : { value: "{color.yellow.30.value}" },
      "40"      : { value: "{color.yellow.40.value}" },
      "50"      : { value: "{color.yellow.50.value}" },
      "60"      : { value: "{color.yellow.60.value}" },
      "70"      : { value: "{color.yellow.70.value}" },
      "80"      : { value: "{color.yellow.80.value}" },
      "90"      : { value: "{color.yellow.90.value}" },
      "100"     : { value: "{color.yellow.100.value}" },
    },

    "negative": {
      "DEFAULT": { value: "{color.negative.60.value}" },
      "10"     : { value: "{color.red.10.value}" },
      "20"     : { value: "{color.red.20.value}" },
      "30"     : { value: "{color.red.30.value}" },
      "40"     : { value: "{color.red.40.value}" },
      "50"     : { value: "{color.red.50.value}" },
      "60"     : { value: "{color.red.60.value}" },
      "70"     : { value: "{color.red.70.value}" },
      "80"     : { value: "{color.red.80.value}" },
      "90"     : { value: "{color.red.90.value}" },
      "100"    : { value: "{color.red.100.value}" },
    },
  }
};
