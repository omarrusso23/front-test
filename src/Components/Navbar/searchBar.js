import React, { useState, useContext } from "react";
import { SearchContext } from "../../Context/searchContext";

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchContext = useContext(SearchContext);

  const searchQueryHandler = () => {
    searchContext.searchHandler(searchQuery);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="You're looking for something?"
        id="searching"
        name="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        className="search-input"
      />

      <button className="search-btn" onClick={searchQueryHandler}>
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
