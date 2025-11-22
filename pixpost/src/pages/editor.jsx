import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/navbar";
import EditorToolbar from "../components/EditorToolbar";
import CanvasRenderer from "../components/CanvasRenderer";

import useCanvasSetup from "../hooks/useCanvasSetup";
import useImageTools from "../hooks/useImageTools";

export default function EditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  const {
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
  } = useCanvasSetup(id);

  const {
    image,
    handleImageUpload,
    removeImage,
    imgSize,
    imgPosition,
    imageScale,
    setImageScale,
    setImgPosition,
  } = useImageTools(canvasRef, id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <CanvasRenderer
          ref={canvasRef}
          canvasSize={canvasSize}
          text={text}
          color={color}
          fontSize={fontSize}
          fontFamily={fontFamily}
          image={image}
          imgSize={imgSize}
          imgPosition={imgPosition}
          imageScale={imageScale}
          setImgPosition={setImgPosition}
          isVector={isVector}
          bgImage={bgImage}
          templateId={id}
        />

        <EditorToolbar
          title={text}
          setTitle={setText}
          color={color}
          setColor={setColor}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          handleImageUpload={handleImageUpload}
          imageScale={imageScale}
          setImageScale={setImageScale}
          removeImage={removeImage}
          navigateBack={() => navigate("/")}
        />
      </div>
    </div>
  );
}
