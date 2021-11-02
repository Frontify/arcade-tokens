module.exports = {
  color: {
    base: { value: "{color.grey.01.value}" },
    lightest: { value: "{color.grey.01.value}" },
    darkest: { value: "{color.grey.16.value}" },
    inverse: {
      "01": { value: "{color.grey.15.value}" },
      "02": { value: "{color.grey.16.value}" },
    },
    box: {
      "01": { value: "{color.grey.02.value}" },
      "01Hover": { value: "{color.grey.03.value}" },
      "01Pressed": { value: "{color.grey.04.value}" },
      "02": { value: "{color.grey.03.value}" },
      "02Hover": { value: "{color.grey.04.value}" },
      "02Pressed": { value: "{color.grey.05.value}" },
      "03": { value: "{color.grey.14.value}" },
      "03Hover": { value: "{color.grey.15.value}" },
      "03Pressed": { value: "{color.grey.16.value}" },
      disabled: { value: "{color.grey.02.value}" },
    },
    line: {
      "01": { value: "{color.grey.04.value}" },
      "02": { value: "{color.grey.05.value}" },
    },
    border: {
      "01": { value: "{color.grey.04.value}" },
      "02": { value: "{color.grey.05.value}" },
      "03": { value: "{color.grey.06.value}" },
      "04": { value: "{color.grey.07.value}" },
      "05": { value: "{color.grey.15.value}" },
    },
    text: {
      "01": { value: "{color.grey.15.value}" },
      "02": { value: "{color.grey.14.value}" },
      "03": { value: "{color.grey.13.value}" },
      "04": { value: "{color.grey.12.value}" },
      disabled: { value: "{color.grey.08.value}" },
    },
    link: {
      "01": { value: "{color.violet.bright.04.value}" },
      "02": { value: "{color.violet.bright.05.value}" },
    },
    focus: {
      "01": { value: "{color.violet.bright.04.value}" },
      "02": { value: "{color.violet.bright.05.value}" },
    },
    positive: {
      _: { value: "{color.green.bright.04.value}" },
      content: { value: "{color.grey.01.value}" },
      border: { value: "{color.green.bright.05.value}" },
      hover: {
        _: { value: "{color.green.bright.05.value}" },
        content: { value: "{color.grey.01.value}" },
        border: { value: "{color.green.bright.06.value}" },
      },
    },
  },
};
