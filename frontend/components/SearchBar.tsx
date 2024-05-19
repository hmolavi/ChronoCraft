export const SearchBar = () => {
  return (
    <div className="fixed bottom-0 w-full m-auto p-4 flex items-center justify-center">
      <div className="bg-neutral-50 p-4 rounded-xl shadow-sm">
        {/* <p className="text-lg">When do you want to travel to?</p> */}
        <input placeholder="Insert Query" className="bg-transparent" />
        {/* <button>Browse</button> */}
      </div>
    </div>
  );
};
