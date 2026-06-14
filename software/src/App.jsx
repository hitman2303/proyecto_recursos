import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Historia from "./pages/Historia";

function App() {

  return (
    <MainLayout>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/historia"
          element={<Historia />}
        />

      </Routes>

    </MainLayout>
  );
}

export default App;