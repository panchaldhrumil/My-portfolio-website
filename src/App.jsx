import { Routes, Route } from "react-router-dom";
import Home from "./components/navbar_components/Home";
import About from "./components/navbar_components/About";
import Project from "./components/navbar_components/Project";
import Contact from "./components/navbar_components/Contact";
import Achievements from "./components/navbar_components/Achievements";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/"             element={<Home />} />
      <Route path="/project"      element={<Project />} />
      <Route path="/about"        element={<About />} />
      <Route path="/contact"      element={<Contact />} />
      <Route path="/achievements" element={<Achievements />} />
    </Routes>
  );
}

export default App;
