import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Contacto from "./components/Contact/Contact";
function App() {
  window.onscroll=()=>{
    let header=document.querySelector('header')
    header.classList.toggle('stycky', window.scrollY > 100);
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/education" element={ <Education />} />
        <Route path="/skills" element={ <Skills />} />
        <Route path="/contact" element={ <Contacto />} />
      </Routes>
    </div>
  )
}

export default App
