"use client";

import Timeline from "timelinejs-react";

const events: Slide[] = [
  {
    start_date: {
      year: 2021,
      month: 6,
      day: 5,
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: "",
    },
    end_date: {
      year: 2021,
      month: 7,
      day: 4,
    },
    unique_id: "1",
    text: {
      headline: "Event1",
      text: "",
    },
    background: {},
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4,
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: "",
    },
    end_date: {
      year: 2021,
      month: 9,
      day: 5,
    },
    unique_id: "2",
    text: {
      headline: "Event2",
      text: "",
    },
    background: {},
  },
  {
    start_date: {
      year: 2021,
      month: 8,
      day: 4,
    },
    media: {
      url: "https://picsum.photos/200/300",
      thumbnail: "https://picsum.photos/200/300",
      caption: "",
      link: "",
    },
    end_date: {
      year: 2021,
      month: 8,
      day: 5,
    },
    unique_id: "3",
    text: {
      headline: "Event3",
      text: "",
    },
    background: {},
  },
];

const TimelinePage = () => {
  return (
    <div>
      <h1>My Timeline</h1>
      <div className="max-w-[320px] p-4 flex h-full bg-slate-50">
        <div className="w-full h-full">
          <p>When do you want to travel to?</p>
          <input placeholder="Insert Query" />
          <button>Browse</button>
        </div>
      </div>
      <Timeline
        target={<div className="timeline" style={{ height: 600 }} />}
        events={events}
        options={{
          timenav_position: "top",
          hash_bookmark: true,
          initial_zoom: 1,
          scale_factor: 1,
          debug: true,
          default_bg_color: "green",
        }} // optional
      />
    </div>
  );
};

export default TimelinePage;
