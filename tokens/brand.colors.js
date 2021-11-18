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
      40     : { value: "9ea0f2" },
      50     : { value: "{color.violet.mid.value}" },
      60     : { value: "{color.violet.bright.value}" },
      70     : { value: "#7159d7" },
      80     : { value: "#6352b4" },
      90     : { value: "#564996" },
      100    : { value: "#463f75" }
    },
    
    yellow: {
      bright : { value: "#FFB400" },
      mid    : { value: "#EEC779" },
      pastel : { value: "#E1D4BE" },
      10     : { value: "#faf3e2" }, // Overridden (not based on leonardo output)
      20     : { value: "{color.yellow.pastel.value}" },
      30     : { value: "#e9cb92" },
      40     : { value: "{color.yellow.pastel.value}" },
      50     : { value: "#f8bb40" },
      60     : { value: "{color.yellow.bright.value}" },
      70     : { value: "#e6a518" },
      80     : { value: "#c28d25" },
      90     : { value: "#7b5e29" },
      100    : { value: "#594624" }
    },
    red: {
      bright : { value: "#FF375A" },
      mid    : { value: "#FF8066" },
      pastel : { value: "#E1C4BE" },
      10     : { value: "#f3edec" },
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
      10     : { value: "#ecf5f2" },
      20     : { value: "{color.green.pastel.value}" },
      30     : { value: "#a7dec8" },
      40     : { value: "{color.green.mid.value}" },
      50     : { value: "#67d4b0" },
      60     : { value: "{color.green.bright.value}" },
      70     : { value: "#2cab8e" },
      80     : { value: "#368d78" },
      90     : { value: "#356d5e" },
      100    : { value: "#2e4f46" }
    },
    grey: {
      0   : { value: "#FFFFFF" },
      5   : { value: "{color.offWhite.value}"},
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
