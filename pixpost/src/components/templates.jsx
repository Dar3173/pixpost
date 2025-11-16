import { useNavigate } from "react-router-dom";

const templates = [
  { id: "01", src: "/templates/01.svg", title: "Plantilla 1"},
  { id: "01", src: "/templates/02.svg", title: "Plantilla 2"},
  { id: "01", src: "/templates/02.svg", title: "Plantilla 3"},
  { id: "01", src: "/templates/01.svg", title: "Plantilla 4"},
  { id: "01", src: "/templates/01.svg", title: "Plantilla 5"}

];

export default function TemplatesGrid() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/editor/${id}`);
  };

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
      {templates.map(({ id, src, title }) => (
        <div
          key={id}
          className="relative cursor-pointer group"
          onClick={() => handleClick(id)}
        >
          <img
            src={src}
            alt={title}
            className="w-full rounded-lg shadow object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity">
            <span className="text-white font-semibold">Editar</span>
          </div>
        </div>
      ))}
    </div>
  );
}
