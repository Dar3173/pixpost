import { useState, useEffect } from "react";

const templateSizes = {
  "01": { width: 400, height: 700 },
  "02": { width: 400, height: 400 },
  "03": { width: 400, height: 400 },

};

export default function useCanvasSetup(id) {
  const [canvasSize, setCanvasSize] = useState({ width: 400, height: 700 });
  const [isVector, setIsVector] = useState(false);
  const [bgImage, setBgImage] = useState("");

  // Texto
  const [text, setText] = useState("Tu texto aquí");
  const [color, setColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(48);
  const [fontFamily, setFontFamily] = useState("Anton, sans-serif");

  useEffect(() => {
    // Detectar plantilla vector o imagen
    if (id === "01") {
      setIsVector(true);
      setBgImage("/templates/template01-bg.png"); // si tienes un fondo aparte
    } else if (id === "02") {
      setIsVector(true);
      setBgImage("/templates/template02-bg.png");
    } 
    else if (id === "03") {
      setIsVector(true);              // 👈 Cambia a true si tienes Template03.jsx
      setBgImage("/templates/template03-bg.png");
    }
    
    else {
      setIsVector(false);
      setBgImage(`/templates/${id}.webp`);
    }

    // Ajustar el tamaño del lienzo según la plantilla
    const newSize = templateSizes[id] || templateSizes["01"];
    setCanvasSize(newSize);
  }, [id]);

  return {
    canvasSize,
    isVector,
    bgImage,

    text,
    setText,
    color,
    setColor,
    fontSize,
    setFontSize,
    fontFamily,
    setFontFamily,
  };
}
