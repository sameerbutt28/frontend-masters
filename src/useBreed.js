import { useState, useEffect } from "react";

const localCache= {};
export default function useBreed(animal) 
{     
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");
    useEffect(()=>
    {    
        if(!animal) 
        {
            setBreedList([])
        }
        else if (localCache[animal])
        {
            setBreedList(localCache[animal])
        }
        else{
            requestBreedList();
        }
    })


}