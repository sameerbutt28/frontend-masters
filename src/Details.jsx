import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchpet";

const Details = () => {
  const { id } = useParams(); 
  const { isLoading, isError, data, error } = useQuery(["details", id], fetchPet);

  if (isLoading) {
    return <div className="loading-pane">
     <h4 className="loader">⚙️
      </h4> 
      </div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // Ensure the data structure is as expected
  if (!data || !data.pets || data.pets.length === 0) {
    return <div>No pet data available</div>;
  }

  const pet = data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>  
    </div>
  );
};

export default Details;
