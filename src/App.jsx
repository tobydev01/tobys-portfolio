// src/App.jsx
import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { AllProjects } from "./components/sections/AllProjects";
import { ProjectDetail } from "./components/sections/ProjectDetail";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import "./index.css";

function MainPage() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Router>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects/all" element={<AllProjects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            {/* fallback to main page */}
            <Route path="*" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
