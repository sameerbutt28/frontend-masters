import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";
 //react query cache is stored in memory 
//  const QueryClient
const App = () => {
  return (    

    <BrowserRouter>  
    <header>
    <Link to="/">Adopt Me!</Link> 
    {/* header must be in the browser router */}
    </header>
      <div>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
