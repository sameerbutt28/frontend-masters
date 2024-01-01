import { useParams } from "react-router-dom"
const Details = () => {
    const {id} = useParams(); //it gets the data through the browser router on the App.jsx
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default Details
