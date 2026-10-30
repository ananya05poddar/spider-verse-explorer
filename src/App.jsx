
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CharacterDetails from "./pages/CharacterDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/character/:id"
            element={<CharacterDetails />}
          />
        </Routes>

        <footer>
          <p>© 2026 SPIDER-VERSE EXPLORER</p>
          <p>ONE WEB. INFINITE POSSIBILITIES.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
