import React from "react";

export const ConfirmModal = ({ show, targetUrl, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-300"
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div className="bg-[#111] rounded-2xl p-8 max-w-sm mx-4 transform transition-all duration-300 scale-95 opacity-0 animate-in">
        {/* animate-in: define this in your CSS for fade+scale */}
        <h3 className="text-xl font-bold mb-4 text-gray-100">
          External Link Warning
        </h3>
        <p className="text-gray-300 mb-6">
          You are about to leave this site and go to:
          <br />
          <a
            href={targetUrl}
            className="text-blue-400 break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {targetUrl}
          </a>
          <br />
          Do you wish to proceed?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded hover:-translate-y-0.5 transition-all text-gray-300 border border-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-blue-500 text-white hover:-translate-y-0.5 transition-all shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
          >
            Yes, Continue
          </button>
        </div>
      </div>
    </div>
  );
};
