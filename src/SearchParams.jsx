import { useState } from "react";
let counter= 0;
const SearchParams = () => {
    counter++
  const [location, setLocation] = useState("");
  return (
    //everytime we clicking on it renders everything again and again and we can seee through the counter
    <div className="search-params">
        <h2>{counter}</h2>
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
