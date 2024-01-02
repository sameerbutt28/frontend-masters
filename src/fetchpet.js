// Asyn function always return promises
//this is the fetch method ready to be used queryclient
const fetchPet = async ({ queryKey }) => {
    const id= queryKey[1];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    if(!apiRes.ok)
    {
        throw new Error(`details/${id} fetch not ok`)
    }
    return apiRes.json();

}; 
export default fetchPet;
// if u call it and it give a corect query key it gonna give u back the correct response if there will be any kind of error it will going to give us the error message.