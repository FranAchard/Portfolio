import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/education" element={ <Education />} />
        <Route path="/skills" element={ <Skills />} />
      </Routes>
    </div>
  )
}

export default App
