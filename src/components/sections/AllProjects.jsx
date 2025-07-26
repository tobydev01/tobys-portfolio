import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink } from "../ExternalLink";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export const AllProjects = () => {
  return (
    <section
      id="all-projects"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            All Commissions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.slug}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
              >
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />

                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>

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

                {/* Optional testimonial */}
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

                {/* Actions: now matches Featured */}
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
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
