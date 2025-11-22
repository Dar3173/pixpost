import React, { forwardRef } from "react";
import { Rnd } from "react-rnd";
import Template01 from "../templates/Template01";
import Template02 from "../templates/Template02";
import Template03 from "../templates/Template03";


const CanvasRenderer = forwardRef(
  (
    {
      canvasSize,
      text,
      color,
      fontSize,
      fontFamily,
      image,
      imgSize,
      imgPosition,
      imageScale,
      setImgPosition,
      setImgSize,
      isVector,
      bgImage,
      templateId,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="relative mx-auto border rounded-lg shadow bg-black overflow-hidden"
        style={{
          width: `${canvasSize.width}px`,
          height: `${canvasSize.height}px`,
        }}
      >
        {/* ======= FONDO ======= */}
        {isVector ? (
          <>
            {templateId === "01" && <Template01 />}
            {templateId === "02" && <Template02 />}
            {templateId === "03" && <Template03 />}


          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* ======= TEXTO ======= */}
        <Rnd bounds="parent" default={{ x: 40, y: 40 }} enableResizing={false}>
          <div
            style={{
              color,
              fontSize: `${fontSize}px`,
              fontFamily,
              cursor: "grab",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {text}
          </div>
        </Rnd>

        {/* ======= IMAGEN ======= */}
{image && (
  <Rnd
    bounds={false}   // ←  PERMITE SALIR DEL LIENZO
    size={{
      width: imgSize.width * imageScale,
      height: imgSize.height * imageScale,
    }}
    position={imgPosition}
    onDragStop={(e, d) => setImgPosition({ x: d.x, y: d.y })}
    onResizeStop={(e, dir, ref, delta, pos) => {
      // actualizar tamaño sin afectar posición
      const newWidth = ref.offsetWidth;
      const newHeight = ref.offsetHeight;

      setImgPosition(pos);
      setImgSize({ width: newWidth / imageScale, height: newHeight / imageScale });
    }}
    lockAspectRatio      // mantiene proporción sin bloquear movimiento
    enableResizing       // permite redimensionar
    minWidth={40}
    minHeight={40}
  >
    <img
      src={image}
      alt="objeto"
      className="w-full h-full object-contain select-none pointer-events-none"
      draggable={false}
    />
  </Rnd>
)}

      </div>
    );
  }
);

export default CanvasRenderer;
