import React, { useState, useContext } from "react";
import { SearchContext } from "../../Context/searchContext";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchContext = useContext(SearchContext);

  const searchQueryHandler = () => {
    searchContext.searchHandler(searchQuery);
  };

  return (
    <div>
      <form className="search-box">
        <input
          type="text"
          placeholder="You're looking for something?"
          id="searching"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="searchComponent"
        />
        <button type="reset" onClick={searchQueryHandler}></button>
      </form>
    </div>
  );
};

export default SearchBar;
