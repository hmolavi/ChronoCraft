import useGetSearchEvent from "@/hooks/getSearchEvent";
import { useTimelineStore } from "@/store/zustand";
import { useState } from "react";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, setLoading } = useTimelineStore();
  const getSearchEvent = useGetSearchEvent();

  return (
    <div className="fixed bottom-0 w-full m-auto p-4 flex items-center justify-center">
      <div className="bg-neutral-50 border flex border-solid border-black/10 w-[480px] gap-2 p-2 rounded-2xl shadow-sm">
        {/* <p className="text-lg">When do you want to travel to?</p> */}
        <input
          disabled={loading}
          placeholder="Search every history"
          className="w-full pl-2 bg-transparent outline-none text-black focus:border-none focus:ring-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={() => {
            setLoading(true);
            console.log("Search Query:", searchQuery);
            getSearchEvent({ queryTopic: searchQuery, numEvents: 3 })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.error(err);
              });
            setSearchQuery("");
          }}
          className={`${
            loading === true && "opacity-55 pointer-events-none"
          } bg-blue-500 text-white font-regular text-sm px-3 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-all`}
        >
          Search
        </button>
        {/* <button>Browse</button> */}
      </div>
    </div>
  );
};
