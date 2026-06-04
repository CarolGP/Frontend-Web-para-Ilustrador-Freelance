import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { ScrollTopButton } from "./components/ScrollTopButton";


const NotFound = () => {
  return(
    <section style={{
      minHeight:"70vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      padding:"40px 20px"
    }}>

      <h1>404</h1>

      <p>Página no encontrada</p>

    </section>
  );
};


function App(){
  return(

    <BrowserRouter>
     <div className="app">

      <Navbar />

      <main className="mainContent">

      <Routes>

        <Route path="/" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      </main>

      <footer className="footer">

        <div className="footerLeft">
          <p>© 2026 Bruno Rodriguez</p>

          <h3 className="footerSubtitle">
            Ilustración digital y tradicional
          </h3>
        </div>


        <div className="footerRight">
          <a
            href="https://instagram.com/brunorodrigvez"
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="https://res.cloudinary.com/dnet6blln/image/upload/q_auto/f_auto/v1774809032/instagram_fdzpxu.png"
              alt="Instagram"
              style={{
                width:"18px",
                marginRight:"6px",
                verticalAlign:"middle"
              }}
            />
            Instagram
          </a>
          <span>|</span>

          <a href="mailto:brunorodriguezdesign@icloud.com">
            ✉️ Email
          </a>
        </div>
      </footer>
      </div>
      <ScrollTopButton/>
    </BrowserRouter>
  );
}
export default App;