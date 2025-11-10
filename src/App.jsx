import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PrivateProjects from "./pages/PrivateProjects";
import "./index.css";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="bg-slate-950 text-white scroll-smooth">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="projects">
                  <Projects />
                </section>
                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />
          <Route path="/private-projects" element={<PrivateProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
