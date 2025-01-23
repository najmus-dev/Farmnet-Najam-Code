import React from "react";

const Modal = ({ isOpen, videoSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Video Element */}
        <video
          src={videoSrc}
          controls
          autoPlay
          className="max-w-full max-h-full"
        ></video>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-full"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
