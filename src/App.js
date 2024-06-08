import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/one-page-demo">
      <ErrorBoundary>
        <Routes>
          {/* Add a route for the home page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Add a catch-all route for handling errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}


export default App;
