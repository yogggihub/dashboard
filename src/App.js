import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import About from "./components/About";
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact-us" element={<Contact/>}/>        
        <Route path="/about" element={<About/>}/>   
        <Route path="faq" element={<Faq/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    // <Home />
    // <Contact />
    // <Faq />
    // <About />
  );
}

export default App;
