"use client";

import { SearchBar } from "@/components/SearchBar";
import { TopNav } from "@/components/TopNav";
import { useTimelineStore } from "@/store/zustand";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import("timelinejs-react"), { ssr: false });

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
      <TopNav />
      <SearchBar />
      {empty && !loading && (
        <div
          className="w-full gap-4 flex flex-col items-center justify-center"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <h2 className="italic font-regular text-xl text-neutral-700 max-w-[420px] text-center">
            &quot;{randomQuote.text}&quot;
          </h2>
          <p className="text-md text-neutral-500 max-w-[420px] text-center">
            {randomQuote.person}
          </p>
        </div>
      )}
      {loading && (
        <div
          role="status"
          className="w-full flex items-center justify-center"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <svg
            aria-hidden="true"
            className="inline w-10 h-10 text-gray-200 animate-spin  fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
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
          events={JSON.parse(timeline)}
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
