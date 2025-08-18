import { useNavigate } from "react-router-dom";

const templates = [
    "src/assets/templates/01.webp",
    "src/assets/templates/02.webp",
    "src/assets/templates/03.webp",
    "src/assets/templates/05.webp",
    "src/assets/templates/04.webp"
];

export default function TemplatesGrid() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    // redirige al editor pasando el ID o nombre de la plantilla
    navigate(`/editor/${id}`);
  };

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
      {templates.map((src, i) => (
        <div
          key={i}
          className="relative cursor-pointer group"
          onClick={() => handleClick(i)}
        >
          <img
            src={src}
            alt={`template-${i}`}
            className="w-full rounded-lg shadow object-contain transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay al hacer hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
            <span className="text-white font-semibold">Editar</span>
          </div>
        </div>
      ))}
    </div>
  );
}
