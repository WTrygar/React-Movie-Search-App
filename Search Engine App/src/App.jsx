import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css";
import Favourites from "./pages/Favourites";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
