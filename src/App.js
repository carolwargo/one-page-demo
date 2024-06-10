import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./components/Home/About";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import DemoPage from './pages/DemoPage.jsx';
import Header from "./components/Header/Header.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import Services from "./pages/ServicesPage.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/one-page-demo">
      <ErrorBoundary>
        <Header/>
        <Routes>
          {/* Add a route for the home page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/services" element={<Services />} />
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
