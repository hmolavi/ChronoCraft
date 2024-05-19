"use client";

import { SearchBar } from "@/components/SearchBar";
import { useTimelineStore } from "@/store/zustand";
import Timeline from "timelinejs-react";

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
  {
    text: "If you want to love your country, you will read history, and if you want someone to love your country, you will read history.",
    person: "Chaeho Shin, Korean independence activist",
  },
];

const Home = () => {
  const randomQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
  const { empty, loading, timeline } = useTimelineStore();

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
          events={timeline}
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
