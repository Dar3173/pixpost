import { Link } from "react-router-dom";
import logo from "../assets/logo-Pixpost.svg"; // 👈 importa el archivo


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow">
      {/* Logo como enlace al Home */}
      <Link to="/">
        <img 
          src={logo}   // 👈 ahora lo usa desde la importación
          alt="PixPost Logo"
          className="w-[100px] h-auto md:w-[120px] lg:w-[150px] cursor-pointer"
        />
      </Link>

      {/* Botón que redirige a /registro */}
      <Link to="/registro">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
          Ingresar
        </button>
      </Link>
    </nav>
  );
}