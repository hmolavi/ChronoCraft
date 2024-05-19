import React from 'react';
import TL from './timeline3/js/TL';
import './timeline3/css/timeline.css';

const Timeline = ({
  target,
  events,
  title,
  options
}) => {
  const timelineEl = React.useRef(null);
  React.useEffect(() => {
    if (timelineEl.current) {
      new TL.Timeline(timelineEl.current, {
        events,
        title,
        options
      });
    }
  }, []);
  return /*#__PURE__*/React.cloneElement(target, {
    ref: timelineEl
  });
};

export default Timeline;
//# sourceMappingURL=index.js.map