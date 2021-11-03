/**
 * Any of the brand colors we want to use in the UI are reassigned to new,
 * more semantic variables here. This has a handful of benefits, most noteable
 * is flexible theming.
 */

module.exports = {
  color: {
    base     : { value: "{color.grey.1.value}" },
    lightest : { value: "{color.grey.lightest.value}" },
    darkest  : { value: "{color.grey.darkest.value}" },
    inverse: {
      _ : { value: "{color.inverse.1.value}" },
      1 : { value: "{color.grey.15.value}" },
      2 : { value: "{color.grey.14.value}" },
      3 : { value: "{color.grey.13.value}" },
    },
    neutral: {
      _  : { value: "{color.neutral.3.value}" },
      1  : { value: "{color.grey.1.value}" },
      2  : { value: "{color.grey.2.value}" },
      3  : { value: "{color.grey.3.value}" },
      4  : { value: "{color.grey.4.value}" },
      5  : { value: "{color.grey.5.value}" },
      6  : { value: "{color.grey.6.value}" },
      7  : { value: "{color.grey.7.value}" },
      8  : { value: "{color.grey.8.value}" },
      9  : { value: "{color.grey.9.value}" },
      10 : { value: "{color.grey.10.value}" },
      11 : { value: "{color.grey.11.value}" },
      12 : { value: "{color.grey.12.value}" },
      13 : { value: "{color.grey.13.value}" },
      14 : { value: "{color.grey.14.value}" },
      15 : { value: "{color.grey.15.value}" },
      16 : { value: "{color.grey.15.value}" },
    },
    interactive: {
      _ : { value: "{color.interactive.4.value}" },
      1 : { value: "{color.violet.brightAccessible.1.value}" },
      2 : { value: "{color.violet.brightAccessible.2.value}" },
      3 : { value: "{color.violet.brightAccessible.3.value}" },
      4 : { value: "{color.violet.brightAccessible.4.value}" },
      5 : { value: "{color.violet.brightAccessible.5.value}" },
      6 : { value: "{color.violet.brightAccessible.6.value}" },
    },
    positive: {
      _ : { value: "{color.positive.4.value}" },
      1 : { value: "{color.green.bright.1.value}" },
      2 : { value: "{color.green.bright.2.value}" },
      3 : { value: "{color.green.bright.3.value}" },
      4 : { value: "{color.green.bright.4.value}" },
      5 : { value: "{color.green.bright.5.value}" },
      6 : { value: "{color.green.bright.6.value}" },
    },
    warning: {
      _ : { value: "{color.positive.4.value}" },
      1 : { value: "{color.yellow.bright.1.value}" },
      2 : { value: "{color.yellow.bright.2.value}" },
      3 : { value: "{color.yellow.bright.3.value}" },
      4 : { value: "{color.yellow.bright.4.value}" },
      5 : { value: "{color.yellow.bright.5.value}" },
      6 : { value: "{color.yellow.bright.6.value}" },
    },
    negative: {
      _ : { value: "{color.positive.4.value}" },
      1 : { value: "{color.red.bright.1.value}" },
      2 : { value: "{color.red.bright.2.value}" },
      3 : { value: "{color.red.bright.3.value}" },
      4 : { value: "{color.red.bright.4.value}" },
      5 : { value: "{color.red.bright.5.value}" },
      6 : { value: "{color.red.bright.6.value}" },
    },
  },
};
