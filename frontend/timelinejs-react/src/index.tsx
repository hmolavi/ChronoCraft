import React from 'react';
import TL from './timeline3/js/TL';
import './timeline3/css/timeline.css';

const Timeline: React.FC<TimelineProps> = ({ target, events, title, options }) => {
    const timelineEl = React.useRef(null);
    React.useEffect(() => {
        if (timelineEl.current) {
            new TL.Timeline(timelineEl.current, { events, title, options });
        }
    }, []);
    return React.cloneElement(target, { ref: timelineEl });
};

export default Timeline;
