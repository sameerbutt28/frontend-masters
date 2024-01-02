import React from "react";
import { createRoot } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  QueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";
//react query cache is stored in memory
const QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, //this logic is trying to say that once you frtch something do not fetch it again.
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
     <BrowserRouter>
      {/* here the browerRouter and QueryClientProvider are basically wrapping components. They mainly o not display any kind of stuff. */}
    <QueryClientProvider client={QueryClient} />
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
