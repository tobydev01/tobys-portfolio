import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink } from "../ExternalLink";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export const Projects = () => {
  const featured = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Commissions
          </h2>

          {/* 2-column grid at md+, so the 3rd will wrap to row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((p, i) => {
              // if it's the last (3rd) item, span two cols and center
              const isLast = i === featured.length - 1;
              return (
                <div
                  key={p.slug}
                  className={`
                    p-6 rounded-xl border border-white/10
                    hover:-translate-y-1 hover:border-blue-500/30
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]
                    transition-all
                    ${isLast ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
                  `}
                >
                  {/* Thumbnail */}
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-4">{p.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Optional Testimonial */}
                  {p.testimonialEnabled && p.testimonial && (
                    <div className="mb-4 p-4 bg-gray-900 rounded-lg">
                      <p className="italic text-gray-300 mb-2">
                        “{p.testimonial.text}”
                      </p>
                      <p className="font-semibold text-gray-100">
                        — {p.testimonial.name}
                      </p>
                      <div className="flex mt-1">
                        {Array.from({ length: p.testimonial.rating }).map(
                          (_, i) => (
                            <span key={i} className="text-yellow-400">
                              ★
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-4 flex flex-wrap gap-4">
                    <ExternalLink
                      href={p.videoUrl || p.url}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Demo →
                    </ExternalLink>
                    {p.detailPage && (
                      <Link
                        to={`/projects/${p.slug}`}
                        className="text-blue-400 hover:text-blue-300 underline transition-colors"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* See All */}
          <div className="text-center mt-8">
            <Link
              to="/projects/all"
              className="inline-block bg-blue-500 text-white py-3 px-8 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)]"
            >
              See All Commissions
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
