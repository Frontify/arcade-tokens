/**
 * IMPORTANT
 * None of these tokens should be exported for use by design system adopters.
 * They are simply a palette of the values we use that make up out brand.
 */
module.exports = {
  color: {
    // PRIMARY
    "off-white" : { value: "#FAFAFA" },
    "charcoal"  : { value: "#2D3232" },
    "warm-grey" : { value: "#E6DCDC" },

    "grey": {
      "0"         : { value: "#FFFFFF" },
      "5"         : { value: "{color.off-white.value}"},
      "10"        : { value: "#f1f1f1"},
      "20"        : { value: "#EAEBEB"},
      "30"        : { value: "#D5D6D6"},
      "40"        : { value: "#ABADAD"},
      "50"        : { value: "#818484"},
      "60"        : { value: "#6C7070"},
      "70"        : { value: "#424747"},
      "80"        : { value: "{color.charcoal.value}"},
      "90"        : { value: "#1a1c1c"},
      "100"       : { value: "#080808"},
    },

    "violet": {
      "bright"    : { value: "#825FFF" },
      "mid"       : { value: "#9088FF" },
      "pastel"    : { value: "#C8D1ED" },
      "10"        : { value: "#F1F3F9" },
      "20"        : { value: "#E3E8F6" },
      "30"        : { value: "{color.violet.pastel.value}" },
      "40"        : { value: "#C8D1ED" },
      "50"        : { value: "{color.violet.mid.value}" },
      "60"        : { value: "{color.violet.bright.value}" },
      "70"        : { value: "#7159d7" },
      "80"        : { value: "#6449C4" },
      "90"        : { value: "#564996" },
      "100"       : { value: "#443185" },
    },

    "red": {
      "bright"    : { value: "#FF375A" },
      "mid"       : { value: "#FF8066" },
      "pastel"    : { value: "#E1C4BE" },
      "10"        : { value: "#F7F3F2" },
      "20"        : { value: "{color.red.pastel.value}" },
      "30"        : { value: "#f0a594" },
      "40"        : { value: "{color.red.mid.value}" },
      "50"        : { value: "#ff615f" },
      "60"        : { value: "{color.red.bright.value}" },
      "70"        : { value: "#ed3956" },
      "80"        : { value: "#CC2C48" },
      "90"        : { value: "#992136" },
      "100"       : { value: "#57282b" },
    },
    
    "green": {
      "bright"    : { value: "#00C8A5" },
      "mid"       : { value: "#80DBB7" },
      "pastel"    : { value: "#BEE1D4" },
      "10"        : { value: "#F2F8F6" },
      "20"        : { value: "{color.green.pastel.value}" },
      "30"        : { value: "#a7dec8" },
      "40"        : { value: "{color.green.mid.value}" },
      "50"        : { value: "#67d4b0" },
      "60"        : { value: "{color.green.bright.value}" },
      "70"        : { value: "#2cab8e" },
      "80"        : { value: "#368d78" },
      "90"        : { value: "#356d5e" },
      "100"       : { value: "#2e4f46" },
   },
  

    "yellow": {
      "bright"    : { value: "#FFB400" },
      "mid"       : { value: "#EEC779" },
      "pastel"    : { value: "#E1D4BE" },
      "10"        : { value: "#FCF8EE" }, // Overridden (not based on leonardo output)
      "20"        : { value: "{color.yellow.pastel.value}" },
      "30"        : { value: "#e9cb92" },
      "40"        : { value: "{color.yellow.mid.value}" },
      "50"        : { value: "#f8bb40" },
      "60"        : { value: "{color.yellow.bright.value}" },
      "70"        : { value: "#e6a518" },
      "80"        : { value: "#c28d25" },
      "90"        : { value: "#7b5e29" },
      "100"       : { value: "#594624" },
   },

   // LEGACY BLACK
    "black": {
      "DEFAULT": { value: "#2d3232" },
      "superdark": { value: "#1a1d1d" },
      "100": { value: "#2d3232" },
      "95": { value: "#424747" },
      "90": { value: "#575b5b" },
      "85": { value: "#5f6363" },
      "80": { value: "#6c7070" },
      "70": { value: "#818484" },
      "60": { value: "#969898" },
      "50": { value: "#abadad" },
      "40": { value: "#b3b5b5" },
      "30": { value: "#c0c2c2" },
      "20": { value: "#d5d6d6" },
      "10": { value: "#eaebeb" },
      "5": { value: "#f7f7f7" },
      "0": { value: "#fafafa" },
      "warm": { value: "#e6dcdc" },
    }
  },
};
