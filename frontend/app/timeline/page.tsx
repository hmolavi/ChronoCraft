"use client";

import { SearchBar } from "@/components/SearchBar";
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
      <SearchBar />
      <Timeline
        target={
          <div className="timeline" style={{ height: "calc(100vh - 240px)" }} />
        }
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
