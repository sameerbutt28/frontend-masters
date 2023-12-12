
const SearchParams = () => {
  const location = "Islamabad, Pakistan ";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input id="location" value= {location} placeholder="location" />
        <button>Submit</button>
      </form>
    </div> 
  );
};
//everytime an event happens the react render everything on the page 
export default SearchParams;
