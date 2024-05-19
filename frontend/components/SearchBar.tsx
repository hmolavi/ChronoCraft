export const SearchBar = () => {
  return (
    <div className="fixed bottom-0 w-full m-auto p-4 flex items-center justify-center">
      <div className="bg-neutral-50 border border-solid border-black/10 w-[400px] p-4 rounded-xl shadow-sm">
        {/* <p className="text-lg">When do you want to travel to?</p> */}
        <input
          placeholder="Search every history"
          className="w-full bg-transparent outline-none text-black focus:border-none focus:ring-0"
        />
        {/* <button>Browse</button> */}
      </div>
    </div>
  );
};
