import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ position, size }) => {
  const { top = "50%", left = "50%" } = position || {};
  const { width = "300px", height = "300px" } = size || {};

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-red-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
