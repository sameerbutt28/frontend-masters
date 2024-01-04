import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList"
// react query will handle all the api requests for you 
export default function useBreed(animal) 
{             
   
const results = useQuery(["breeds", animal], fetchBreedList);
return [
    // If results, results.data, or results.data.breeds is null or undefined at any point in this chain, JavaScript will stop evaluating and return undefined immediately, instead of throwing a TypeError (as it would without optional chaining).
    results?.data?.breeds??[], results.status
];
// Nullish Coalescing Operator (??):

// This operator is used to provide a default value if the value on its left-hand side is null or undefined.

}