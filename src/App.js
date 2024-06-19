import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./components/Home/About";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import DemoPage from './pages/DemoPage.jsx';
import TopNav from './components/Nav/TopNav.jsx';
import ErrorBoundary from "./components/ErrorBoundary";
import ServicesPage from "./pages/ServicesPage.jsx";
import GraphicsPage from "./pages/GraphicsPage.jsx";
import WebPage from "./pages/WebPage.jsx";
import SocialPage from "./pages/SocialPage.jsx";
import Footer from "./components/Footer.jsx";
import TestPage from "./pages/Test.jsx";
import Header2 from "./components/Header/Header2.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/one-page-demo">
      <ErrorBoundary>
   <TopNav/>
      <Header2/>
        <Routes>
          {/* Add a route for the home page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/social" element={<SocialPage />} />
          {/* Add a catch-all route for handling errors */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
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
