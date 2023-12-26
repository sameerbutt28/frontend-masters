import Pet from "./Pet";
const Results = ({ pets }) => {
  //here the pet in jsx tells us that we are expecting a props named as pets on the other component where we want to call it.
  return (    
    <div className="search">
      {!pets.length ? (
        <h1>No Pets found.</h1>
      ) : (
        pets.map((pet) => {
          <Pet  
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city} , ${pet.state}`}
            key={pet.id}
          />;
        })
      )}
    </div>
  );
};

export default Results;
