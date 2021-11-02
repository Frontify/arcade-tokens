module.exports = {
  color: {
    base: {
      value: "{palette.ui.color.neutral.01.value}",
    },
    lightest: {
      value: "{palette.ui.color.neutral.01.value}",
    },
    darkest: {
      value: "{palette.ui.color.neutral.16.value}",
    },
    inverse: {
      "01": { value: "{palette.ui.color.neutral.15.value}" },
      "02": { value: "{palette.ui.color.neutral.16.value}" },
    },
    box: {
      "01": { value: "{palette.ui.color.neutral.02.value}" },
      "01Hover": { value: "{palette.ui.color.neutral.03.value}" },
      "01Pressed": { value: "{palette.ui.color.neutral.04.value}" },
      "02": { value: "{palette.ui.color.neutral.03.value}" },
      "02Hover": { value: "{palette.ui.color.neutral.04.value}" },
      "02Pressed": { value: "{palette.ui.color.neutral.05.value}" },
      "03": { value: "{palette.ui.color.neutral.14.value}" },
      "03Hover": { value: "{palette.ui.color.neutral.15.value}" },
      "03Pressed": { value: "{palette.ui.color.neutral.16.value}" },
      disabled: { value: "{palette.ui.color.neutral.02.value}" },
    },
    line: {
      "01": { value: "{palette.ui.color.neutral.04.value}" },
      "02": { value: "{palette.ui.color.neutral.05.value}" },
    },
    border: {
      "01": { value: "{palette.ui.color.neutral.04.value}" },
      "02": { value: "{palette.ui.color.neutral.05.value}" },
      "03": { value: "{palette.ui.color.neutral.06.value}" },
      "04": { value: "{palette.ui.color.neutral.07.value}" },
      "05": { value: "{palette.ui.color.neutral.15.value}" },
    },
    text: {
      "01": { value: "{palette.ui.color.neutral.15.value}" },
      "02": { value: "{palette.ui.color.neutral.14.value}" },
      "03": { value: "{palette.ui.color.neutral.13.value}" },
      "04": { value: "{palette.ui.color.neutral.12.value}" },
      disabled: { value: "{palette.ui.color.neutral.08.value}" },
    },
    link: {
      "01": { value: "{palette.ui.color.interactive.04.value}" },
      "02": { value: "{palette.ui.color.interactive.05.value}" },
    },
    focus: {
      "01": { value: "{palette.ui.color.interactive.04.value}" },
      "02": { value: "{palette.ui.color.interactive.05.value}" },
    },
    positive: {
      _: { value: "{palette.ui.color.positive.04.value}" },
      content: { value: "{palette.ui.color.neutral.01.value}" },
      border: { value: "{palette.ui.color.positive.05.value}" },
      hover: {
        _: { value: "{palette.ui.color.positive.05.value}" },
        content: { value: "{palette.ui.color.neutral.01.value}" },
        border: { value: "{palette.ui.color.positive.06.value}" },
      },
    },
  },
};
