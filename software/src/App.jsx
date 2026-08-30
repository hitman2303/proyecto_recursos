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

import QuienSoy from "./pages/QuienSoy";

// Si tenés este juego:
import OrdenarEventos from "./pages/OrdenarEventos";

import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  return (

    <Routes>

      {/* ========================= */}
      {/* LOGIN */}
      {/* ========================= */}

      <Route
        path="/"
        element={<Login />}
      />


      {/* ========================= */}
      {/* ALUMNO */}
      {/* ========================= */}

      <Route
        path="/home"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <Home />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/historia"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <Historia />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/timeline"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <Timeline />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/quiz"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <Quiz />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/juegos"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <Juegos />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/juegos/ordenar-eventos"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <OrdenarEventos />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/juegos/quien-soy"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <QuienSoy />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/historial"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <Historial />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      <Route
        path="/acerca"
        element={
          <ProtectedRoute role="alumno">

            <MainLayout>
              <Acerca />
            </MainLayout>

          </ProtectedRoute>
        }
      />


      {/* ========================= */}
      {/* DOCENTE */}
      {/* ========================= */}

      <Route
        path="/docente"
        element={
          <ProtectedRoute role="docente">

            <MainLayout>
              <Docente />
            </MainLayout>

          </ProtectedRoute>
        }
      />

    </Routes>

  );

}

export default App;