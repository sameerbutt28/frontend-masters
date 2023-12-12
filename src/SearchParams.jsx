import { useState } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => setLocation(e.target.value)}
          id="location"
          value={location}
          placeholder="location"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
//everytime an event happens the react render everything on the page from top to bottom
export default SearchParams;
