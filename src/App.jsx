import  { createRoot }  from "react-dom/client";
import SearchParams from "./SearchParams";

  // app.js
  const App = () => {   
  return (    
    <div>     
      <h1>Adopt Me!</h1>
      <SearchParams /> 
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container); //old method 
root.render(<App />);