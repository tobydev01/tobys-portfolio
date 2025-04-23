import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontEndSkills = [
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

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in Lua scripting for Roblox
              and creating Discord applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backEndSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S in Computer Science </strong> - XYZ University
                  (2020 - 2024)
                </li>
                <li>
                  <strong> Relevant Coursework: </strong> Data Structures, Web
                  Development, Cloud Computing
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <strong> Head Scripter </strong> - AdrenaLane (2021 -
                    Present)
                    <p>
                      Developed all scripts/systems within the game. Works on
                      updates and new implementations.
                    </p>
                  </h4>
                </div>
                <div>
                  <h4 className="font-semibold">
                    <strong> Commissions </strong> - Many Games/People
                    <p>
                      Worked on many different projects and commissions for
                      games. Showcases of some of them will be shown in the
                      projects section.
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
