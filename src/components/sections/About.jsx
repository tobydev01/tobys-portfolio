import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink } from "../ExternalLink";

export const About = () => {
  // — Skills arrays (now including Lua) —
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
      views: 19_800,
    },
  ];
  const totalViews = contributions.reduce((sum, c) => sum + c.views, 0);
  const [countedViews, setCountedViews] = useState(0);

  // — Testimonials data —
  const testimonials = [
    {
      name: "Drops",
      rating: 5,
      text: "Toby works really hard and gets stuff done quickly.",
    },
    /* {
      name: "Sam P.",
      rating: 4,
      text: "Great communication, fast turnaround.",
    },
    {
      name: "Jess K.",
      rating: 5,
      text: "Absolutely fantastic scripting work.",
    }, */
  ];
  const avgRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const roundedAvg = Math.round(avgRating);

  // — Animate total views count-up on mount —
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

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 space-y-16"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Bio */}
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
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>High School</strong> – <strong></strong> (2024 –
                  Present)
                </li>
              </ul>
            </div>
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

          {/* Section: My Contributions */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              My Contributions
            </h2>
            <div className="overflow-x-auto py-4">
              <div className="flex space-x-6 px-4">
                {contributions.map((c, i) => (
                  <ExternalLink
                    key={i}
                    href={c.url}
                    className="min-w-[200px] rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={c.thumbnail}
                      alt={c.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4 bg-[#111] text-gray-200">
                      <h4 className="font-semibold mb-2">{c.title}</h4>
                      <p className="text-sm">
                        {c.views.toLocaleString()} views
                      </p>
                    </div>
                  </ExternalLink>
                ))}
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Total Views: {countedViews.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Section: Customer Testimonials */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Customer Testimonials
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Average Rating */}
              <div className="w-full text-center mb-8">
                <p className="text-xl text-gray-300 mb-2">Average Rating</p>
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: roundedAvg }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Individual Testimonials */}
              {testimonials.map((t, i) => (
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
