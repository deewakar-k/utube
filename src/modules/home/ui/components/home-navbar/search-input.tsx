import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="search"
          className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-200"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-2.5 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200"
      >
        <SearchIcon className="size-5 text-gray-500" />
      </button>
    </form>
  );
};

export { SearchInput };
