import Navbar from "../components/navbar";
import ilustracion from "../assets/registro-ilustracion.png";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-1 px-8">
        
        {/* Columna izquierda: login y registro */}
        <div className="w-full md:w-1/3 space-y-8">
          {/* Iniciar sesión */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Iniciar sesión</h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border rounded-lg mb-3 focus:ring focus:ring-purple-300"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-3 border rounded-lg mb-3 focus:ring focus:ring-purple-300"
            />
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition">
              Entrar
            </button>
          </div>

          {/* Registro */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-center">Regístrate</h2>
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-3 border rounded-lg mb-3 focus:ring focus:ring-purple-300"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-3 border rounded-lg mb-3 focus:ring focus:ring-purple-300"
            />
            <input
              type="text"
              placeholder="Número de contacto"
              className="w-full p-3 border rounded-lg mb-3 focus:ring focus:ring-purple-300"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-3 border rounded-lg mb-3 focus:ring focus:ring-purple-300"
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="w-full p-3 border rounded-lg mb-3 focus:ring focus:ring-purple-300"
            />
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-3 rounded-lg hover:from-blue-500 hover:to-purple-500 transition">
              Registrarse
            </button>
          </div>
        </div>

        {/* Columna derecha: texto + ilustración */}
        <div className="flex-1 flex flex-col items-center text-center space-y-8 mt-12 md:mt-0">
          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl">
            Plantillas listas, herramientas fáciles y todo lo que necesitas
            para que tus redes se vean top, sin saber diseño. <br />
            <span className="text-pink-500 font-bold">¡Empieza ya, es gratis!</span>
          </p>
          <img
            src={ilustracion}
            alt="Ilustración"
            className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
}
