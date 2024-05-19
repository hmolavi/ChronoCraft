(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./timeline3/js/TL", "./timeline3/css/timeline.css"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./timeline3/js/TL"), require("./timeline3/css/timeline.css"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.TL, global.timeline);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _TL) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _TL2 = _interopRequireDefault(_TL);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  const Timeline = ({
    target,
    events,
    title,
    options
  }) => {
    const timelineEl = _react2.default.useRef(null);

    _react2.default.useEffect(() => {
      if (timelineEl.current) {
        new _TL2.default.Timeline(timelineEl.current, {
          events,
          title,
          options
        });
      }
    }, []);

    return /*#__PURE__*/_react2.default.cloneElement(target, {
      ref: timelineEl
    });
  };

  exports.default = Timeline;
});
//# sourceMappingURL=index.js.map