import { useState, useEffect } from "react";
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
      <Contact />
      <Footer />
    </>
  );
}

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1402489149407105126/N2mzqHa00iCAnBF9aj61EYchMEbpv9a1MNDUgBtCqg5XMrlca76GMwJkcavH5K4cOT2W";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const locationInfo = `
            🌐 New visitor:
            IP: \`${data.query}\`
            Location: ${data.city}, ${data.regionName}, ${data.country}
            Coordinates: (${data.lat}, ${data.lon})
            ISP: ${data.isp}
          `;
          fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: locationInfo,
            }),
          });
        } else {
          console.error("Geolocation failed:", data.message);
        }
      })
      .catch((err) => console.error("Failed to fetch geolocation:", err));
  }, []);

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
            <Route path="*" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
