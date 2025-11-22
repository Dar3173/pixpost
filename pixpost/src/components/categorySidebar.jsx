const categories = [
  "Todas las plantillas",

];

export default function CategorySidebar() {
  return (
    <aside className="flex flex-col gap-3">
      {categories.map((cat, i) => (
        <button
          key={i}
          className="
            px-4 py-2 rounded-lg font-medium shadow-md cursor-pointer
            bg-gradient-to-r from-purple-500 to-blue-500 text-white
            transition-all duration-300
            hover:bg-white hover:text-black hover:border-2 hover:border-red-500
            hover:from-transparent hover:to-transparent
          "
        >
          {cat}
        </button>
      ))}
    </aside>
  );
}