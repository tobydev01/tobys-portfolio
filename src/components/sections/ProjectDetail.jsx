import React from "react";
import { useParams, Link } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import { ExternalLink } from "../ExternalLink";
import { projects } from "../../data/projects";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.detailPage) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-300">Project not available.</p>
        <Link to="/" className="text-blue-400 underline mt-4">
          Back Home
        </Link>
      </section>
    );
  }

  const { detail } = project;

  return (
    <section id={slug} className="min-h-screen py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-gray-300">{detail.longDescription}</p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {detail.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-40 object-cover rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            {detail.demoUrl && (
              <ExternalLink
                href={detail.demoUrl}
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Watch Demo
              </ExternalLink>
            )}
            {detail.repoUrl && (
              <ExternalLink
                href={detail.repoUrl}
                className="border border-blue-500 text-blue-500 py-2 px-4 rounded"
              >
                View Code
              </ExternalLink>
            )}
          </div>

          <Link to="/" className="text-blue-400 underline">
            ← Back to Home
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
};
