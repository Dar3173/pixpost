import React from "react";

const Template01 = ({
  title = "Reinicio",
  subtitle = "con estilo",
  bgImage = "/templates/plantilla01-fondo1.png",
  overlayImage = "/templates/uñas.png",
  textColor = "#ffffff",
  fontSize = 88,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <style>
        {`
          .cls-title {
            font-family: 'Anton', sans-serif;
            font-size: ${fontSize}px;
            fill: ${textColor};
          }
          .cls-subtitle {
            font-family: 'Anton', sans-serif;
            font-size: ${fontSize * 0.8}px;
            fill: ${textColor};
          }
        `}
      </style>
    </defs>

    {/* Imagen de fondo */}
    <image
      href={bgImage}
      width="1000"
      height="1000"
      preserveAspectRatio="xMidYMid slice"
    />

    {/* Texto dinámico */}
    <text className="cls-title" x="100" y="200">
      {title}
    </text>
    <text className="cls-subtitle" x="100" y="320">
      {subtitle}
    </text>

    {/* Imagen extra (persona, mano, etc.) */}
    {overlayImage && (
      <image
        href={overlayImage}
        x="100"
        y="400"
        width="300"
        height="300"
        preserveAspectRatio="xMidYMid meet"
      />
    )}
  </svg>
);

export default Template01;
