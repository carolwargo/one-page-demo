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
import TestPage from "./pages/Test.jsx";
import TopNavLayout from './components/Layouts/TopNavLayout.jsx';
import HomeLayout from './components/Layouts/HomeLayout.jsx';
import WebLayout from './components/Layouts/WebLayout.jsx';
import Website from './pages/LandingPages/Website.jsx';
import ResourcesLayout from './components/Layouts/ResourcesLayout.jsx';
import Article1 from "./components/Resources/Articles/Article1.jsx";
import Article2 from "./components/Resources/Articles/Article2.jsx";
import Article3 from "./components/Resources/Articles/Article3.jsx";
import ArticleLayout from './components/Layouts/ArticleLayout.jsx';
import ArticleRendering from './components/Resources/Articles/ArticleRendering.jsx';

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

         
       
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/graphics" element={<GraphicsPage />} />
          <Route path="/web" element={<WebPage />} />
          <Route path="/social" element={<SocialPage />} />
          </Route>
          
          <Route element={<ResourcesLayout />} >
          <Route path="/resources" element={<ResourcesPage />} />
          </Route>

       
      <Route element={<ArticleLayout />}>
         <Route path="/" element={<ArticleRendering />} />
        <Route path="article1" element={<Article1 />} />
        <Route path="article2" element={<Article2 />} />
        <Route path="article3" element={<Article3 />} />
      </Route>

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
