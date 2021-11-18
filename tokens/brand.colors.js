/**
 * IMPORTANT
 * None of these tokens should be exported for use by design system adopters.
 * They are simply a palette of the values we use that make up out brand.
 */
module.exports = {
  color: {
    offWhite : { value: "#FAFAFA" },
    charcoal : { value: "#2D3232" },
    warmGrey : { value: "#E6DCDC" },
    violet: {
      bright : { value: "#825FFF" },
      mid    : { value: "#9088FF" },
      pastel : { value: "#C8D1ED" },
      10     : { value: "#e1e5f2" },
      20     : { value: "{color.violet.pastel.value}" },
      30     : { value: "#bac2eb" },
      40     : { value: "{color.violet.mid.value}" },
      50     : { value: "{color.violet.bright.value}" },
      60     : { value: "#6f57d0" },
      70     : { value: "#5a4ca1" },
      80     : { value: "#5a4ca1" },
      90     : { value: "#4d4383" },
      100    : { value: "#3c3661" }
    },
    
    yellow: {
      bright : { value: "#FFB400" },
      mid    : { value: "#EEC779" },
      pastel : { value: "#E1D4BE" },
      10     : { value: "#ebe5d9" },
      20     : { value: "{color.yellow.pastel.value}" },
      30     : { value: "#e9cb92" },
      40     : { value: "{color.yellow.pastel.value}" },
      50     : { value: "#f8bb40" },
      60     : { value: "{color.yellow.bright.value}" },
      70     : { value: "#e6a518" },
      80     : { value: "#c28d25" },
      90     : { value: "#a17829" },
      100    : { value: "#7b5e29" }
    },
    red: {
      bright : { value: "#FF375A" },
      mid    : { value: "#FF8066" },
      pastel : { value: "#E1C4BE" },
      10     : { value: "#eadad7" },
      20     : { value: "{color.red.pastel.value}" },
      30     : { value: "#f0a594" },
      40     : { value: "{color.red.mid.value}" },
      50     : { value: "#ff615f" },
      60     : { value: "{color.red.bright.value}" },
      70     : { value: "#ed3956" },
      80     : { value: "#d83b52" },
      90     : { value: "#a33945" },
      100    : { value: "#83343b" }
    },
    green: {
      bright : { value: "#00C8A5" },
      mid    : { value: "#80DBB7" },
      pastel : { value: "#BEE1D4" },
      10     : { value: "#d5eae2" },
      20     : { value: "{color.green.pastel.value}" },
      30     : { value: "#a7dec8" },
      40     : { value: "{color.green.mid.value}" },
      50     : { value: "#67d4b0" },
      60     : { value: "{color.green.bright.value}" },
      70     : { value: "#339b82" },
      80     : { value: "#356d5e" },
      90     : { value: "#30584c" },
      100    : { value: "#28413a" }
    },
    grey: {
      0   : { value: "#FFFFFF" },
      5  : { value: "{color.offWhite.value}"},
      10  : { value: "#f4f4f4"},
      20  : { value: "#e8e9e9"},
      30  : { value: "#c0c1c1"},
      40  : { value: "#a5a8a8"},
      50  : { value: "#8d9090"},
      60  : { value: "#6c7070"},
      70  : { value: "#464b4b"},
      80  : { value: "{color.charcoal.value}"},
      90  : { value: "#1a1c1c"},
      100 : { value: "#080808"},
    },
  },
};
