import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./view/common/Header";
import Footer from "./view/common/Footer";
import Home from "./view/Home";
import NotFound from "./view/NotFound";
import Faq from './view/Faq';
import Contact from './view/Contact'
function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container bodyContainer">
          <Header />
          <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
