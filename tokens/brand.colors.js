/**
 * IMPORTANT
 * None of these tokens should be exported for use by design system adopters.
 * They are simply a palette of the values we use that make up out brand.
 */
module.exports = {
  color: {
    // PRIMARY
    "off-white"     : { value: "#FAFAFA" },
    "charcoal"      : { value: "#2D3232" },
    "warm-grey"     : { value: "#E6DCDC" },
    
    // GREY
    "grey-0"        : { value: "#FFFFFF" },
    "grey-5"        : { value: "{color.off-white.value}"},
    "grey-10"       : { value: "#f4f4f4"},
    "grey-20"       : { value: "#e8e9e9"},
    "grey-30"       : { value: "#c0c1c1"},
    "grey-40"       : { value: "#a5a8a8"},
    "grey-50"       : { value: "#8d9090"},
    "grey-60"       : { value: "#6c7070"},
    "grey-70"       : { value: "#464b4b"},
    "grey-80"       : { value: "{color.charcoal.value}"},
    "grey-90"       : { value: "#1a1c1c"},
    "grey-100"      : { value: "#080808"},
    
    // VIOLET
    "violet-bright" : { value: "#825FFF" },
    "violet-mid"    : { value: "#9088FF" },
    "violet-pastel" : { value: "#C8D1ED" },
    "violet-10"     : { value: "#e1e5f2" },
    "violet-20"     : { value: "{color.violet-pastel.value}" },
    "violet-30"     : { value: "#bac2eb" },
    "violet-40"     : { value: "9ea0f2" },
    "violet-50"     : { value: "{color.violet-mid.value}" },
    "violet-60"     : { value: "{color.violet-bright.value}" },
    "violet-70"     : { value: "#7159d7" },
    "violet-80"     : { value: "#6352b4" },
    "violet-90"     : { value: "#564996" },
    "violet-100"    : { value: "#363256" },
    
    // RED
    "red-bright"    : { value: "#FF375A" },
    "red-mid"       : { value: "#FF8066" },
    "red-pastel"    : { value: "#E1C4BE" },
    "red-10"        : { value: "#f3edec" },
    "red-20"        : { value: "{color.red-pastel.value}" },
    "red-30"        : { value: "#f0a594" },
    "red-40"        : { value: "{color.red-mid.value}" },
    "red-50"        : { value: "#ff615f" },
    "red-60"        : { value: "{color.red-bright.value}" },
    "red-70"        : { value: "#ed3956" },
    "red-80"        : { value: "#d83b52" },
    "red-90"        : { value: "#a33945" },
    "red-100"       : { value: "#57282b" },

    // GREEN
    "green-bright"  : { value: "#00C8A5" },
    "green-mid"     : { value: "#80DBB7" },
    "green-pastel"  : { value: "#BEE1D4" },
    "green-10"      : { value: "#ecf5f2" },
    "green-20"      : { value: "{color.green-pastel.value}" },
    "green-30"      : { value: "#a7dec8" },
    "green-40"      : { value: "{color.green-mid.value}" },
    "green-50"      : { value: "#67d4b0" },
    "green-60"      : { value: "{color.green-bright.value}" },
    "green-70"      : { value: "#2cab8e" },
    "green-80"      : { value: "#368d78" },
    "green-90"      : { value: "#356d5e" },
    "green-100"     : { value: "#2e4f46" },
    
    // YELLOW
    "yellow-bright" : { value: "#FFB400" },
    "yellow-mid"    : { value: "#EEC779" },
    "yellow-pastel" : { value: "#E1D4BE" },
    "yellow-10"     : { value: "#faf3e2" }, // Overridden (not based on leonardo output)
    "yellow-20"     : { value: "{color.yellow-pastel.value}" },
    "yellow-30"     : { value: "#e9cb92" },
    "yellow-40"     : { value: "{color.yellow-mid.value}" },
    "yellow-50"     : { value: "#f8bb40" },
    "yellow-60"     : { value: "{color.yellow-bright.value}" },
    "yellow-70"     : { value: "#e6a518" },
    "yellow-80"     : { value: "#c28d25" },
    "yellow-90"     : { value: "#7b5e29" },
    "yellow-100"    : { value: "#594624" },
  },
};
