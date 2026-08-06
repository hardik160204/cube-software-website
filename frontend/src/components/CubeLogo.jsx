import React from "react";

// SVG recreation of the Cube Software isometric-cube logo
// Tiles in blue / light-blue / red / yellow like the original brand mark
const CubeLogo = ({ size = 44, showText = true, light = false }) => {
  return (
    <a href="#home" className="flex items-center gap-3 select-none" aria-label="Cube Software">
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top face - 4 diamonds */}
        <polygon points="50,2 68,12 50,22 32,12" fill="#1E88E5" />
        <polygon points="68,12 86,22 68,32 50,22" fill="#64B5F6" />
        <polygon points="32,12 50,22 32,32 14,22" fill="#64B5F6" />
        <polygon points="50,22 68,32 50,42 32,32" fill="#E53935" />
        {/* Left face */}
        <polygon points="14,24 32,34 32,56 14,46" fill="#1565C0" />
        <polygon points="32,34 50,44 50,66 32,56" fill="#FDB913" />
        <polygon points="14,48 32,58 32,80 14,70" fill="#E53935" />
        <polygon points="32,58 50,68 50,90 32,80" fill="#1E88E5" />
        {/* Right face */}
        <polygon points="86,24 68,34 68,56 86,46" fill="#0D47A1" />
        <polygon points="68,34 50,44 50,66 68,56" fill="#42A5F5" />
        <polygon points="86,48 68,58 68,80 86,70" fill="#FDB913" />
        <polygon points="68,58 50,68 50,90 68,80" fill="#0D47A1" />
      </svg>
      {showText && (
        <div className="leading-none">
          <div
            className="font-heading font-extrabold tracking-wide text-xl"
            style={{ color: "#E53935" }}
          >
            CUBE
          </div>
          <div
            className={`text-[10px] font-semibold tracking-[0.18em] ${light ? "text-blue-200" : ""}`}
            style={!light ? { color: "#1565C0" } : {}}
          >
            SOFTWARE PVT. LTD.
          </div>
        </div>
      )}
    </a>
  );
};

export default CubeLogo;
