import { useState, useEffect } from "react";
import Pet from "./Pet"
const ANIMALS = ["cat", "dog", "horse", "eligator", "dinosour"];
const BREEDS = ["poodle"];
// let counter= 0;
const SearchParams = () => {
  // counter++
  const [location, setLocation] = useState("Gujar khan");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  useEffect(()=>
  {
    requestPets();
  }, [animal]) // the term in the use effect array shows whenever the animal changes the useeffect will render the functon like everytime the animal option changes the requestPet() will be rendered.
  const requestPets = async()=>
  {
const res = await fetch(
  `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
);
const json= await res.json();
setPets(json.pets);
  }
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
                  setBreed(""); //this set breed shows that wheneever onchage happens in the animal then the breed will be set to empty string
          } 

        }
        >              
          <option />
              {/* here the blank option shows that you can select the black option from th option bar */}
          {ANIMALS.map((animal) => {
            return <option key={animal}>{animal}</option>;
          })}
        </select>
        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          //if length === zero if there is no item in the array then the option willl be disabled 
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
    {  pets.map(pet =>
      (
<Pet 
name={pet.name} 
breed={pet.breed} 
animal={pet.animal}
key={pet.id}
/>
      )
      )}
    </div> 
  );
};
//everytime an event happens the react render everything on the page from top to bottom
export default SearchParams;
