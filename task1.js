function loop(src, trg, keys, cb = (v) => v) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    target[key] = cb[(src[key], key)];
  }
}

Object.assign(ctx.prototype, {
  __applyStyleState: function (styleState) {
    loop(styleState, this, Object.keys(styleState));
  },

  __setDefaultStyles: function () {
    loop(STYLES, this, Object.keys(STYLES), (v) => v.canvas);
  },

  __getStyleState: function () {
    const styleState = {};

    loop(this, styleState, Object.keys(STYLES));

    return styleState;
  },
});
