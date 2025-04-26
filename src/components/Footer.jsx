import React from "react";
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
          <p>
            PLEASE NOTE: If we agree to a deal for a commission, and you hire
            me, you MUST agree to & sign a Terms of Service.
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
            {/* add more links here */}
          </ul>
        </div>
      </div>
    </footer>
  );
};
