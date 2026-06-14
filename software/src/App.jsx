import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Timeline from "./pages/Timeline";
import Juegos from "./pages/Juegos";
import Acerca from "./pages/Acerca";
import Historia from "./pages/Historia";
import Docente from "./pages/Docente";
function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/timeline" element={<Timeline />} />

        <Route path="/juegos" element={<Juegos />} />

        <Route path="/acerca" element={<Acerca />} />

        <Route path="/historia" element={<Historia />} />

        <Route path="/docente" element={<Docente />} />
      </Routes>
    </MainLayout>
  );
}

export default App;