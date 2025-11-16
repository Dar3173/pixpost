import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import EditorToolbar from "../components/EditorToolbar";
import { Rnd } from "react-rnd";

// 👇 Importa tus plantillas SVG convertidas
import Template01 from "../templates/Template01";

export default function EditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // 🎨 Estados principales
  const [bgImage, setBgImage] = useState("");
  const [customBg, setCustomBg] = useState(null);
  const [title, setTitle] = useState("Tu texto aquí");
  const [color, setColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(48);
  const [fontFamily, setFontFamily] = useState("Anton, sans-serif");
  const [image, setImage] = useState(null);
  const [isVector, setIsVector] = useState(false);

  // 📥 Detectar si la plantilla es SVG o imagen raster
  useEffect(() => {
    if (id === "01") {
      setIsVector(true);
    } else {
      setIsVector(false);
      setBgImage(`/fondos/${id}.webp`);
    }
  }, [id]);

  // 📤 Subir imagen (objeto/persona)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 📤 Subir fondo personalizado
  const handleBgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setCustomBg(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 📥 Descargar como imagen
  const handleDownload = async (format = "png") => {
    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(canvasRef.current, { scale: 2 });
    const dataUrl = canvas.toDataURL(`image/${format}`);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `plantilla-${id}.${format}`;
    link.click();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* 🎨 Lienzo */}
        <div className="flex-1 flex justify-center items-center bg-gray-100">
          <div
            ref={canvasRef}
            className="relative w-[400px] h-[600px] border rounded-lg shadow overflow-hidden bg-white"
            style={
              !isVector
                ? {
                    backgroundImage: `url(${customBg || bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            {/* Si es vector, renderizamos el componente SVG */}
            {isVector ? (
              <Template01
                title={title}
                subtitle="Subtítulo"
                textColor={color}
                fontSize={fontSize}
                bgColor="#fff8ba"
              />
            ) : (
              <>
                {/* Texto movible */}
                <Rnd
                  bounds="parent"
                  default={{ x: 50, y: 50, width: "auto", height: "auto" }}
                >
                  <div
                    style={{
                      color,
                      fontSize: `${fontSize}px`,
                      fontFamily,
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      cursor: "move",
                    }}
                  >
                    {title}
                  </div>
                </Rnd>

                {/* Imagen movible */}
                {image && (
                  <Rnd
                    bounds="parent"
                    default={{ x: 120, y: 300, width: 150, height: 150 }}
                  >
                    <img
                      src={image}
                      alt="imagen subida"
                      className="w-full h-full object-contain cursor-move"
                    />
                  </Rnd>
                )}
              </>
            )}
          </div>
        </div>

        {/* 🧰 Panel lateral */}
        <EditorToolbar
          title={title}
          setTitle={setTitle}
          color={color}
          setColor={setColor}
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          handleImageUpload={handleImageUpload}
          handleBgUpload={handleBgUpload}
          handleDownload={handleDownload}
          navigateBack={() => navigate("/")}
        />
      </div>
    </div>
  );
}
