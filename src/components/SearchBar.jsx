import React, { useState } from "react";

const SearchBar = ({ setShowSearchBar }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
    setShowSearchBar(false);
  };

  return (
    <div className="relative flex items-center gap-3 text-white text-xl mb-2">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
        className="bg-transparent border-b-2 border-white text-white outline-none w-36 md:w-52"
      />
      <button
        onClick={handleSearch}
        className="cursor-pointer bg-white text-black py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
