// Asyn function always return promises
//this is the fetch method ready to be used queryclient
const fetchBreedList = async ({ queryKey }) => {
    const animal= queryKey[1];
    if(!animal)
    return [];  
    
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
    if(!apiRes.ok)
    {
        throw new Error(`details/${animal} fetch not ok`)
    }
    return apiRes.json();
                             
}; 
export default fetchBreedList;
// if u call it and it give a corect query key it gonna give u back the correct response if there will be any kind of error it will going to give us the error message.