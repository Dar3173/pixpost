import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


// Tus páginas
import Index from "./pages";
import EditorPage from "./pages/editor";
import RegisterPage from "./pages/registro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Index />} />

        {/* Página de editor con id dinámico */}
        <Route path="/editor/:id" element={<EditorPage />} />

        {/* Página de registro */}
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
