async function fetchSearch({ queryKey }) {
  const { animal, location, breed } = queryKey[1];
  //here we see that that the querykey do not have anykind of problem in accepting object it can use and play with objects.
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breeds=${breed}`
  );
  if (res.ok) {
    throw new Error(
      `pet search was not ok for ${animal}, ${location}, ${breed}`
    );
  }
  return res.json();
}
export default fetchSearch;
