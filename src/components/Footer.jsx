import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "./ExternalLink";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111] text-gray-400 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="space-y-2">
          <p>
            © {year} <strong>Toby</strong>. All rights reserved.
          </p>
          <p>
            Email:{" "}
            <ExternalLink href="mailto:tobyscommissions22@gmail.com">
              tobyscommissions22@gmail.com
            </ExternalLink>
          </p>
          <p>Discord: tobys01</p>
          <p className="text-sm text-gray-500 mt-2">
            All commissions are subject to my{" "}
            <Link
              to="/terms"
              className="text-blue-400 hover:text-blue-300 transition underline"
            >
              Terms of Service
            </Link>
            .
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Links</h4>
          <ul className="space-y-1">
            <li>
              <ExternalLink href="https://github.com/tobydev01">
                GitHub Profile
              </ExternalLink>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
