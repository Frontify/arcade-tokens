module.exports = {
  /**
   * COLOR
   * - All color values get flipped, but take care to override some things as necessary
   */
  color: {
    "neutral-0"   : { value: "{color.grey-100.value}" },
    "neutral-5"   : { value: "{color.grey-90.value}" },
    "neutral-10"  : { value: "{color.grey-80.value}" },
    "neutral-20"  : { value: "{color.grey-70.value}" },
    "neutral-30"  : { value: "{color.grey-60.value}" },
    "neutral-40"  : { value: "{color.grey-50.value}" },
    "neutral-50"  : { value: "{color.grey-40.value}" },
    "neutral-60"  : { value: "{color.grey-30.value}" },
    "neutral-70"  : { value: "{color.grey-20.value}" },
    "neutral-80"  : { value: "{color.grey-10.value}" },
    "neutral-90"  : { value: "{color.grey-5.value}" },
    "neutral-100" : { value: "{color.grey-0.value}" },
  },
  base: {
    "color" : { value: "{color.neutral-10.value}", attributes: { category: 'color' } },
  },
  text: {
    "color"      : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
    "color-weak" : { value: "{color.neutral-60.value}", attributes: { category: 'color' } },
  },
  border: {
    "color"          : { value: "{color.neutral-20.value}", attributes: { category: 'color' } },
    "color-strong"   : { value: "{color.neutral-30.value}", attributes: { category: 'color' } },
    "color-x-strong" : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
  },
  input: {
    "placeholder-color" : { value: "{color.neutral-50.value}", attributes: { category: "color" } }
  },
  /**
   * SHADOW
   * - All values need to be provided for the sake of Figma,
   *   but they should not be exported to other platforms, just the color overrides
   */
  shadow: {
    // DEFAULTS
    "matrix"          : { value: "{shadow.offset-y.value} {shadow.offset-x.value} {shadow.blur.value} {shadow.spread.value} {shadow.color.value}", attributes: { type: "matrix" } },
    "offset-x"        : { value: 0, attributes: { category: "size", type: "shadowOffset", item: "x" } },
    "offset-y"        : { value: 0.1875, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "spread"          : { value: 0, attributes: { category: "size", type: "shadowSpread" } },
    "blur"            : { value: 0.625, attributes: { category: "size", type: "shadowBlur" } },
    "color"           : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.5 }] },
    // Top shadow
    "top-matrix"      : { value: "{shadow.top-offset-y.value} {shadow.top-offset-x.value} {shadow.blur.value} {shadow.top-spread.value} {shadow.color.value}", attributes: { type: "matrix" } },
    "top-offset-x"    : { value: "{shadow.offset-y.value}", attributes: { category: "size", type: "shadowOffset", item: "x", } },
    "top-offset-y"    : { value: -0.625, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "top-spread"      : { value: -0.3125, attributes: { category: "size", type: "shadowSpread" } },
    // Bottom- shadow
    "bottom-matrix"   : { value: "{shadow.bottom-offset-y.value} {shadow.bottom-offset-x.value} {shadow.blur.value} {shadow.bottom-spread.value} {shadow.color.value}", attributes: { type: "matrix" } },
    "bottom-offset-y" : { value: "{shadow.offset-y.value}", attributes: { category: "size", type: "shadowOffset", item: "x" } },
    "bottom-offset-x" : { value: 0.625, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "bottom-spread"   : { value: -0.3125, attributes: { category: "size", type: "shadowSpread" } },
    // Large size
    "large-matrix"    : { value: "{shadow.large-offset-y.value} {shadow.large-offset-x.value} {shadow.large-blur.value} {shadow.large-spread.value} {shadow.large-color.value}", attributes: { type: "matrix" } },
    "large-offset-y"  : { value: 1.5625, attributes: { category: "size", type: "shadowOffset", item: "x" } },
    "large-offset-x"  : { value: 0, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "large-spread"    : { value: 0, attributes: { category: "size", type: "shadowSpread" } },
    "large-blur"      : { value: 5, attributes: { category: "size", type: "shadowBlur" } },
    "large-color"     : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.8 }] },
  },
};
