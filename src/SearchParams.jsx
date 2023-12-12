import React from "react";

const SearchParams = () => {
  const location = "Islamabad, Pakistan ";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input id="location" value= {location} placeholder="location" />
      </form>
    </div>
  );
};

export default SearchParams;
