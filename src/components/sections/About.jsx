import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink } from "../ExternalLink";
import { projects } from "../../data/projects";
import "./About.css";

export const About = () => {
  // — Skills arrays —
  const frontEndSkills = [
    "Lua",
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
  ];
  const backEndSkills = [
    "Node.js",
    "Python",
    "AWS",
    "Express",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  // — Contributions data —
  const contributions = [
    {
      title: "AdrenaLane",
      thumbnail:
        "https://tr.rbxcdn.com/180DAY-4f318280f1a23fdca727a8b647fbb711/768/432/Image/Webp/noFilter",
      url: "https://www.roblox.com/games/93361401490452/HUGE-UPDATE-AdrenaLane-BETA",
      views: 247500,
    },
    {
      title: "AC Transit: VT School Buses",
      thumbnail:
        "https://tr.rbxcdn.com/180DAY-ba8bb255ffd79b0d88aee24e25a4abfd/768/432/Image/Webp/noFilter",
      url: "https://www.roblox.com/games/7715892268/UPDATE-VT-School-Buses",
      views: 326000,
    },
  ];
  const totalViews = contributions.reduce((sum, c) => sum + c.views, 0);
  const [countedViews, setCountedViews] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 50;
    const increment = Math.ceil(totalViews / (duration / stepTime));
    const timer = setInterval(() => {
      start = Math.min(start + increment, totalViews);
      setCountedViews(start);
      if (start >= totalViews) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [totalViews]);

  // — Pull testimonials from projects.js —
  const allTestimonials = projects
    .filter((p) => p.testimonialEnabled && p.testimonial)
    .map((p) => ({
      ...p.testimonial,
      projectTitle: p.title,
    }));

  // — Slider state for >3 testimonials —
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const maxIndex = Math.max(allTestimonials.length - 3, 0);

  useEffect(() => {
    if (allTestimonials.length <= 3) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + direction;
        if (next > maxIndex || next < 0) {
          setDirection(-direction);
          return prev - direction;
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [allTestimonials.length, direction, maxIndex]);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 space-y-16"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          {/* About Me Header */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Bio Card */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hey, I’m Toby, a Roblox scripter with over 4 years of experience
              and many contributions. I specialize in Lua scripting for Roblox,
              but I’m also fluent in JavaScript, Python, and more. Whether it's
              systems, gameplay mechanics, Discord bot integrations, or backend
              logic, I handle it all. I’m currently open for commissions, if
              you’ve got a project that needs a reliable and skilled developer,
              I’m your guy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Saint John Vianney High School</strong> – Holmdel, NJ
                  (2024 – Present)
                </li>
              </ul>
            </div>
            {/* Work */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <strong>Scripter</strong> – <strong>AdrenaLane</strong>{" "}
                    (2021 – Present)
                    <p>
                      Developed all scripts and gameplay systems, handled
                      updates and implemented new features.
                    </p>
                  </h4>
                </div>
                <div>
                  <h4 className="font-semibold">
                    <strong>Commissions</strong> –{" "}
                    <strong>Freelance Roblox Developer</strong>
                    <p>
                      Completed multiple paid scripting projects; portfolio in
                      Projects section.
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Contributions */}
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Contributions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributions.map((contribution, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
              >
                <img
                  src={contribution.thumbnail}
                  alt={contribution.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{contribution.title}</h3>
                <div className="flex justify-between items-center mb-4">
                  <ExternalLink href={contribution.url}>
                    View Project
                  </ExternalLink>
                  <div className="text-blue-500">
                    {contribution.views.toLocaleString()}
                    <span className="text-sm text-gray-400 ml-1">views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Total Impact */}
          <div className="mt-8 text-center p-6 rounded-xl border-white/10 border max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-2">Total Impact</h3>
            <div className="text-4xl font-bold text-blue-500">
              {countedViews.toLocaleString()}
              <span className="text-lg text-gray-400 ml-2">total views</span>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {/* Customer Testimonials */}
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Customer Testimonials
          </h2>

          {allTestimonials.length <= 3 ? (
            // Static layout for up to 3
            <div className="flex flex-wrap gap-6 justify-center">
              {allTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/3 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center mb-3">
                    {Array.from({ length: t.rating }).map((_, ii) => (
                      <span key={ii} className="text-yellow-400 mr-1">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{t.text}"</p>
                  <p className="font-semibold text-white">— {t.name}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    ({t.projectTitle})
                  </p>
                </div>
              ))}
            </div>
          ) : (
            // Slider for more than 3
            <div className="overflow-hidden">
              <div key={currentIndex} className="flex gap-6 animate-slide-fade">
                {allTestimonials
                  .slice(currentIndex, currentIndex + 3)
                  .map((t, i) => (
                    <div
                      key={i}
                      className="w-full md:w-1/3 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                    >
                      <div className="flex items-center mb-3">
                        {Array.from({ length: t.rating }).map((_, ii) => (
                          <span key={ii} className="text-yellow-400 mr-1">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4">"{t.text}"</p>
                      <p className="font-semibold text-white">— {t.name}</p>
                      <p className="text-sm text-gray-400 mt-2">
                        ({t.projectTitle})
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
