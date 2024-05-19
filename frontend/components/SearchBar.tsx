import getSearchEvent from "@/hooks/getSearchEvent";

export const SearchBar = () => {
  return (
    <div className="fixed bottom-0 w-full m-auto p-4 flex items-center justify-center">
      <div className="bg-neutral-50 border flex border-solid border-black/10 w-[400px] p-2 rounded-2xl shadow-sm">
        {/* <p className="text-lg">When do you want to travel to?</p> */}
        <input
          placeholder="Search every history"
          className="w-full pl-2 bg-transparent outline-none text-black focus:border-none focus:ring-0"
        />
        <button
          onClick={() =>
            getSearchEvent({ queryTopic: "World War 1", numEvents: 3 })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.error(err);
              })
          }
          className="bg-neutral-200 text-neutral-800 font-medium text-sm px-3 py-2 rounded-lg"
        >
          Search
        </button>
        {/* <button>Browse</button> */}
      </div>
    </div>
  );
};
