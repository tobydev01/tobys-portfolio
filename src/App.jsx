import { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { AllProjects } from "./components/sections/AllProjects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* Loading screen (blocks until loaded) */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* Navbar & MobileMenu always visible */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          {/* Main single-page view */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* All Projects view */}
          <Route path="/projects/all" element={<AllProjects />} />
          {/* Fallback to main */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
