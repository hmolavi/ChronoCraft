"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TL = _interopRequireDefault(require("./timeline3/js/TL"));

require("./timeline3/css/timeline.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timeline = function Timeline(_ref) {
  var target = _ref.target,
      events = _ref.events,
      title = _ref.title,
      options = _ref.options;

  var timelineEl = _react.default.useRef(null);

  _react.default.useEffect(function () {
    if (timelineEl.current) {
      new _TL.default.Timeline(timelineEl.current, {
        events: events,
        title: title,
        options: options
      });
    }
  }, []);

  return /*#__PURE__*/_react.default.cloneElement(target, {
    ref: timelineEl
  });
};

var _default = Timeline;
exports.default = _default;
//# sourceMappingURL=index.js.map