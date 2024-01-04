import { useState } from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import useBreedList from "./useBreed"; // Ensur this path is correct
import Results from "./Results"; // Ensure this path is correct
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
 
const SearchParams = () => {
  const [requestParams, setRequestParams]= useState(
    { 
      location:"",
      animal:"",
      breed:"",
    }
  )
  const [animal, setAnimal] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

 const results = useQuery(["search", requestParams ], fetchSearch);
 const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      {error && <h2>Error: {error}</h2>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}   
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
