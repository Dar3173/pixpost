import Navbar from "../components/navbar";
import { Stage, Layer, Image as KonvaImage, Text } from "react-konva";
import { useEffect, useRef, useState } from "react";

export default function EditorPage() {
  const stageRef = useRef(null);              // 👈 ahora sí se usa
  const [templateImg, setTemplateImg] = useState(null);
  const [text, setText] = useState("Tu texto aquí");
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";            // evita el canvas “tainted” al exportar
    img.src = "/src/assets/templates/01.webp"; // luego hazlo dinámico con useParams
    img.onload = () => setTemplateImg(img);
  }, []);

  const handleExport = () => {
    if (!stageRef.current) return;
    const uri = stageRef.current.toDataURL({ pixelRatio: 2 });
    const a = document.createElement("a");
    a.href = uri;
    a.download = "pixpost.png";
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* Canvas */}
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <Stage ref={stageRef} width={600} height={800}>
            <Layer>
              {templateImg && <KonvaImage image={templateImg} />}
              <Text
                text={text}
                x={50}
                y={50}
                fontSize={28}
                fill={color}
                draggable
              />
            </Layer>
          </Stage>
        </div>

        {/* Sidebar */}
        <div className="w-72 bg-white shadow p-4 space-y-4">
          <h2 className="font-semibold text-lg">Editar</h2>

          <div>
            <label className="block mb-1">Texto</label>
            <input
              className="w-full border rounded p-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1">Color</label>
            <input
              type="color"
              className="w-full h-10"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <button
            onClick={handleExport}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded hover:opacity-90"
          >
            Descargar PNG
          </button>
        </div>
      </div>
    </div>
  );
}
