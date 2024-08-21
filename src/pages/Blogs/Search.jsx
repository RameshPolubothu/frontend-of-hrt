import React from "react";

const Search = ({ search, handleSearchChange, handlequery }) => {
  return (
    <div className="w-full flex mt-8">
      <form className="flex items-center w-full" onSubmit={(e)=>{
        e.preventDefault();
        handlequery();
      }}>
        <input
          value={search}
          onChange={handleSearchChange} // This must be correctly linked to the prop
          className="py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border"
          type="text"
          placeholder="Rooftop Hotels Near you...."
        />
        <button type="submit" className="bg-[#1E73BE] px-4 py-2 text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
