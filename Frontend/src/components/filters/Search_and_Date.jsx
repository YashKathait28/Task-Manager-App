import { Search } from "lucide-react";

const Search_and_Date = ({search, date, setSearch, setDate}) => {

  const handleClear = () => {
    setSearch("");
    setDate("");
  }
  

  return (
    <div className="mt-5 flex justify-end gap-5 px-8 border-amber-200 ">
      <div className="relative">
        <Search
          className="absolute left-1 top-1/2 -translate-y-1/2"
          size={20}
        />
        <input
          type="text"
          placeholder="Search the task here..."
          className="border rounded-lg pl-7 p-2 w-60"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>

      <input
        type="date"
        className="border rounded-lg p-2 w-35"
        value={date}
        onChange={(e) => setDate(e.currentTarget.value)}
      />

      <button onClick={handleClear} className="border px-2 text-lg bg-indigo-400 hover:bg-indigo-500 rounded-lg cursor-pointer">Clear Filters</button>
    </div>
  );
};

export default Search_and_Date;
