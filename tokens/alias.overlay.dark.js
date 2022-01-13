/**
* OVERLAY
* A filter placed on top of content to obscure it.
* ======================================================================== */

module.exports = {
  overlay: {
    "color" : { value: "{color.grey.100.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.5 }] },
  }
};
