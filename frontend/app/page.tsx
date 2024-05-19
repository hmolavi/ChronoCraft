"use client";

import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";
import Timeline from "timelinejs-react";

const events: Slide[] = [
  {
    start_date: {
      year: 1914,
      month: 6,
      day: 28,
    },
    media: {
      url: "(url of thumbnail image)",
      caption: "",
      link: "",
    },
    end_date: {
      year: 1914,
      month: 6,
      day: 28,
    },
    unique_id: "",
    text: {
      headline: "Assassination of Archduke Franz Ferdinand",
      text: "The assassination of Archduke Franz Ferdinand of Austria-Hungary by a Serbian nationalist led to the outbreak of World War 1.",
    },
    background: {},
  },
  {
    start_date: {
      year: 1916,
      month: 7,
      day: 1,
    },
    media: {
      url: "(url of thumbnail image)",
      caption: "",
      link: "",
    },
    end_date: {
      year: 1916,
      month: 11,
      day: 18,
    },
    unique_id: "",
    text: {
      headline: "Battle of the Somme",
      text: "One of the bloodiest battles in human history, the Battle of the Somme claimed over one million casualties and marked a turning point in the war.",
    },
    background: {},
  },
  {
    start_date: {
      year: 1919,
      month: 6,
      day: 28,
    },
    media: {
      url: "(url of thumbnail image)",
      caption: "",
      link: "",
    },
    end_date: {
      year: 1919,
      month: 6,
      day: 28,
    },
    unique_id: "",
    text: {
      headline: "Treaty of Versailles",
      text: "The Treaty of Versailles, signed at the end of World War 1, imposed punitive conditions on Germany and laid the foundation for future conflicts.",
    },
    background: {},
  },
  {
    start_date: {
      year: 1916,
      month: 2,
      day: 21,
    },
    media: {
      url: "(url of thumbnail image)",
      caption: "",
      link: "",
    },
    end_date: {
      year: 1916,
      month: 12,
      day: 18,
    },
    unique_id: "",
    text: {
      headline: "Battle of Verdun",
      text: "The Battle of Verdun was the longest and one of the deadliest battles in World War 1, resulting in tremendous loss of life on both sides.",
    },
    background: {},
  },
  {
    start_date: {
      year: 1917,
      month: 3,
      day: 8,
    },
    media: {
      url: "(url of thumbnail image)",
      caption: "",
      link: "",
    },
    end_date: {
      year: 1917,
      month: 11,
      day: 7,
    },
    unique_id: "",
    text: {
      headline: "Russian Revolution",
      text: "The Russian Revolution of 1917 led to the overthrow of the Romanov dynasty and the establishment of a communist government in Russia, eventually leading to its withdrawal from World War 1.",
    },
    background: {},
  },
];

const Quotes = [
  {
    text: "History is not the past but a map of the past, drawn from a particular point of view, to be useful to the modern traveller.",
    person: "Henry Glassie, US historian",
  },
  {
    text: "History is a vast early warning system.",
    person: "Norman Cousins, American journalist",
  },
  {
    text: "Study history, study history. In history lies all the secrets of statecraft.",
    person: "Confucius, Chinese teacher and philosopher",
  },
  {
    text: "The ancient people said that a country can be destroyed, but history cannot be destroyed.",
    person: "Eunsik Park, Korean independence activist",
  },
  {
    text: "The entire history of mankind is, in any case, nothing but a prolonged fight to the death for the conquest of universal prestige and absolute power.",
    person: "Albert Camus, French-Algerian author",
  },
];

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(true);
  const randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
  return (
    <div>
      <h1>My Timeline</h1>
      <SearchBar />
      {empty && (
        <div
          className="w-full gap-4 flex flex-col items-center justify-center"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <h2 className="italic font-regular text-xl text-neutral-700 max-w-[420px] text-center">
            {`"${randomQuote.text}"`}
          </h2>
          <p className="text-md text-neutral-500 max-w-[420px] text-center">
            {randomQuote.person}
          </p>
        </div>
      )}
      {!empty && !loading && (
        <Timeline
          target={
            <div
              className="timeline"
              style={{ height: "calc(100vh - 240px)" }}
            />
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
      )}
    </div>
  );
};

export default Home;
