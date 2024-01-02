import { useParams } from "react-router-dom"
import { QueryClient, useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchpet";
const Details = () => {
    const {id} = useParams(); //it gets the data through the browser router on the App.jsx
    const results = useQuery(["details", id], fetchPet)
    // u cannot awiat in render function.
    if(results.isLoading)
    {
      return(
        <div className="loading-pane">
          <h2 className="loader">
spin
          </h2>

        </div>
      )
    }
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default Details
