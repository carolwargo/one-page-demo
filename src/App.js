import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./components/Home/About";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import DemoPage from './pages/DemoPage.jsx';
import ErrorBoundary from "./components/ErrorBoundary";
import ServicesPage from "./pages/ServicesPage.jsx";
import GraphicsPage from "./pages/GraphicsPage.jsx";
import WebPage from "./pages/WebPage.jsx";
import SocialPage from "./pages/SocialPage.jsx";
import Footer from "./components/Footer.jsx";
import TestPage from "./pages/Test.jsx";
import TopNavLayout from './components/Layouts/TopNavLayout.jsx';
import HomeLayout from './components/Layouts/HomeLayout.jsx';
import WebLayout from './components/Layouts/WebLayout.jsx';
import Website from './pages/LandingPages/Website.jsx';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/one-page-demo">
      <ErrorBoundary>
        <Routes>
          {/* Add a route for the home page */}
          <Route element={<HomeLayout />} >
          <Route path="/" element={<AboutPage />} />
          </Route>
              {/* Add a route for the home page */}
              <Route element={<WebLayout />} >
          <Route path="/website" element={<Website />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route element={<TopNavLayout />} >
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/social" element={<SocialPage />} />
          </Route>
          
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
