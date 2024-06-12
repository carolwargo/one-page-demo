import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./components/Home/About";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import DemoPage from './pages/DemoPage.jsx';
import MegaMenu from './components/Nav/MegaMenu.jsx';
import ErrorBoundary from "./components/ErrorBoundary";
import ServicesPage from "./pages/ServicesPage.jsx";
import TestPage from "./pages/Test.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/one-page-demo">
      <ErrorBoundary>
     <MegaMenu />
        <Routes>
          {/* Add a route for the home page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/test" element={<TestPage />} />
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
