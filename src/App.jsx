import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchParams from './SearchParams';
import Details from './Details';

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Data fetched will not be refetched again
      cacheTime: Infinity,
    },
  },
});
   
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <div>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
