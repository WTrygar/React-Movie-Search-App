import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </main>
  );
}

export default App;
