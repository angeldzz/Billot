"use client";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Pagina1 from "./pages/Pagina1/Pagina1.jsx";
import Pagina2 from "./pages/Pagina2/Pagina2.jsx";
import Pagina3 from "./pages/Pagina3/Pagina3.jsx";
import Pagina4 from "./pages/Pagina4/Pagina4.jsx";
import About from "./pages/About/About.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ParticleBackground from "./components/effects/ParticleBackground.jsx";
import LoadingBar from "./components/effects/LoadingBar.jsx";
import {
  useCustomCursor,
  useMouseGlow,
  useScrollAnimations,
  useRippleEffect,
} from "./hooks/useVisualEffects";

function App() {
  const location = useLocation();

  // Aplica los efectos visuales globalmente
  useCustomCursor();
  useMouseGlow();
  useScrollAnimations();
  useRippleEffect();

  return (
    <>
      <LoadingBar />
      <ParticleBackground />
      <header className="header">
        <Navbar />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home key={location.pathname} />} />
        <Route path="/about" element={<About />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        <Route path="/pagina3" element={<Pagina3 />} />
        <Route path="/pagina4" element={<Pagina4 />} />
        <Route
          path="/soporte"
          element={
            <div className="page-placeholder">Soporte - Próximamente</div>
          }
        />
        <Route
          path="/iniciar-sesion"
          element={
            <div className="page-placeholder">
              Iniciar Sesión - Próximamente
            </div>
          }
        />
        <Route
          path="/registrarse"
          element={
            <div className="page-placeholder">Registrarse - Próximamente</div>
          }
        />
      </Routes>
      </main>
      <Footer />
      <style jsx>{`
        .page-placeholder {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--primary-green);
          text-align: center;
          background: linear-gradient(
            135deg,
            var(--navy) 0%,
            var(--dark-bg) 100%
          );
        }
      `}</style>
    </>
  );
}

export default App;
