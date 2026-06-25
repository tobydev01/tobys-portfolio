import React, { useState } from "react";
import { ConfirmModal } from "./ConfirmModal";

export const ExternalLink = ({ href, children, className }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    if (
      e.button === 0 &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !href.startsWith("#") &&
      !href.includes(window.location.host)
    ) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const confirm = () => {
    setShowModal(false);
    window.open(href, "_blank", "noopener");
  };

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>

      <ConfirmModal
        show={showModal}
        targetUrl={href}
        onConfirm={confirm}
        onCancel={() => setShowModal(false)}
      />
    </>
  );
};
