export default function EditorToolbar({
  title,
  setTitle,
  color,
  setColor,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
  handleImageUpload,
  handleBgUpload,
  handleDownload,
  navigateBack,
 setCustomBg,
}) {
  return (
    <div className="w-80 bg-white shadow p-4 space-y-4 overflow-y-auto">
      <h2 className="font-semibold text-lg mb-2">Herramientas</h2>

      {/* Texto */}
      <div>
        <label className="block text-sm font-medium mb-1">Texto</label>
        <input
          className="w-full border rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Color */}
      <div>
        <label className="block text-sm font-medium mb-1">Color</label>
        <input
          type="color"
          className="w-full h-10"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      {/* Tamaño */}
      <div>
        <label className="block text-sm font-medium mb-1">Tamaño de fuente</label>
        <input
          type="range"
          min="20"
          max="120"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-xs text-gray-500">{fontSize}px</p>
      </div>

      {/* Tipografía */}
      <div>
        <label className="block text-sm font-medium mb-1">Tipografía</label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="Anton, sans-serif">Anton</option>
          <option value="Poppins, sans-serif">Poppins</option>
          <option value="Bebas Neue, sans-serif">Bebas Neue</option>
          <option value="Roboto, sans-serif">Roboto</option>
        </select>
      </div>

      {/* Imagen */}
      <div>
        <label className="block text-sm font-medium mb-2">Subir imagen</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Fondo */}
      <div>
        <label className="block text-sm font-medium mb-2">Fondo</label>
        <div className="flex gap-2">
          <button
            onClick={() => setCustomBg(null)}
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
            Fondo original
            </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleBgUpload}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      {/* Descargar */}
      <div className="pt-2 flex flex-col gap-2">
        <button
          onClick={() => handleDownload("png")}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Descargar PNG
        </button>
        <button
          onClick={() => handleDownload("jpeg")}
          className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Descargar JPG
        </button>
      </div>

      {/* Volver */}
      <div className="pt-4">
        <button
          onClick={navigateBack}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          ← Volver a plantillas
        </button>
      </div>
    </div>
  );
}
