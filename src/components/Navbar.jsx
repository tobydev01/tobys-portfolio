import React, { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="font-mono text-xl font-bold text-white focus:outline-none"
          >
            Toby's<span className="text-blue-500"> Commissions</span>
          </button>

          {/* hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden focus:outline-none text-white text-2xl"
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>

          {/* desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
