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
import Historial from "./pages/Historial";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <MainLayout>
      <Routes>
        {/* ===================== */}
        {/* RUTAS ALUMNO */}
        {/* ===================== */}

        <Route
          path="/home"
          element={
            <ProtectedRoute role="alumno">
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/historia"
          element={
            <ProtectedRoute role="alumno">
              <Historia />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute role="alumno">
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/juegos"
          element={
            <ProtectedRoute role="alumno">
              <Juegos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/timeline"
          element={
            <ProtectedRoute role="alumno">
              <Timeline />
            </ProtectedRoute>
          }
        />

        <Route
          path="/historial"
          element={
            <ProtectedRoute role="alumno">
              <Historial />
            </ProtectedRoute>
          }
        />

        <Route
          path="/acerca"
          element={
            <ProtectedRoute role="alumno">
              <Acerca />
            </ProtectedRoute>
          }
        />


        {/* ===================== */}
        {/* DOCENTE */}
        {/* ===================== */}

        <Route
          path="/docente"
          element={
            <ProtectedRoute role="docente">
              <Docente />
            </ProtectedRoute>
          }
        />
      </Routes>
    </MainLayout>
  );
}

export default App;