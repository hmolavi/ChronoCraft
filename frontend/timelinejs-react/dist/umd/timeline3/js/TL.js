(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./timeline.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./timeline.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.timeline);
    global.undefined = mod.exports;
  }
})(this, function (exports, TL) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = TL.TL;
});
//# sourceMappingURL=TL.js.map