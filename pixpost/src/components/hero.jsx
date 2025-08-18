import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center my-12 px-4">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Diseña tus posts <br /> en minutos y sin enredos
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">
        Plantillas listas, herramientas fáciles y todo lo que necesitas
        para que tus redes se vean top, sin saber de diseño.
      </p>

      {/* Botón que lleva a registro */}
      <Link to="/registro">
        <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 cursor-pointer">
          ¡Empieza ya, es gratis!
        </button>
      </Link>
    </section>
  );
}