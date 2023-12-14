import { useState } from "react";
const ANIMALS = ["cat", "dog", "horse", "eligator", "dinosour"];
const BREEDS = ["poodle"];
// let counter= 0;
const SearchParams = () => {
  // counter++
  const [location, setLocation] = useState("Gujar khan");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    //everytime we clicking on it renders everything again and again and we can seee through the counter
    <div className="search-params">
      {/* <h2>{counter}</h2> */}
      <form>
        <label htmlFor="location">Location</label>
        <input
          onChange={(e) => setLocation(e.target.value)
        }
          id="location"
          value={location}
          placeholder="location"
        /> 
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) =>{
            setAnimal(e.target.value)
                  setBreed("");
          } 

        }
        >
          <option />
          {ANIMALS.map((animal) => {
            return <option key={animal}>{animal}</option>;
          })}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled = {BREEDS.length === 0}
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
          <option />
          {BREEDS.map((breed) => {
            return <option key={breed}>{breed}</option>;
          })}
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};
//everytime an event happens the react render everything on the page from top to bottom
export default SearchParams;
