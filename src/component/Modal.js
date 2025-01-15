import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center trans z-50">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            ✖
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
