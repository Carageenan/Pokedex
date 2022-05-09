import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Evolution from "./components/Evolution";
import Moves from "./components/Moves";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="stats" element={<Stats />} />
          <Route path="evolution" element={<Evolution />} />
          <Route path="moves" element={<Moves />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
