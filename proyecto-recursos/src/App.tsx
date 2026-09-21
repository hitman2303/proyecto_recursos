import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Historia from "./pages/Historia";
import Timeline from "./pages/Timeline";
import Personajes from "./pages/Personajes";
import Eventos from "./pages/Eventos";
import Recursos from "./pages/Recursos";
import Tutoriales from "./pages/Tutoriales";
import Descargar from "./pages/Descargar";

export default function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/historia" element={<Historia />} />

        <Route path="/timeline" element={<Timeline />} />

        <Route path="/personajes" element={<Personajes />} />

        <Route path="/eventos" element={<Eventos />} />

        <Route path="/recursos" element={<Recursos />} />

        <Route path="/tutoriales" element={<Tutoriales />} />

        <Route path="/descargar" element={<Descargar />} />

      </Routes>

    </Router>
  );
}