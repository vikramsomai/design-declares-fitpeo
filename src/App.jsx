import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FabMenu from "./components/FabMenu/FabMenu";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Latest from "./pages/Latest/Latest";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showChapterOverlay, setShowChapterOverlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${progress}%`
      );
      document.documentElement.style.setProperty(
        "--scroll-opacity",
        progress > 0 ? "1" : "0"
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showChapterOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showChapterOverlay]);

  return (
    <div className={`container ${showChapterOverlay ? "overlay-active" : ""}`}>
      <div className="scroll-progress"></div>
      <div className="global-chapter"></div>

      <Router>
        <div
          className={`main-content-wrapper`}
          style={{ position: "relative" }}
        >
          <div
            className={`main-content ${
              isMenuOpen || showChapterOverlay ? "blurred" : ""
            }`}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/latest" element={<Latest />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          <div className="fab-menu-wrapper">
            <FabMenu
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              setShowChapterOverlay={setShowChapterOverlay}
            />
          </div>
        </div>

        <Footer menuOpen={isMenuOpen} />
      </Router>

      {showChapterOverlay && (
        <div className="chapter-overlay show">
          <button
            className="chapter-close-btn"
            onClick={() => setShowChapterOverlay(false)}
          >
            ×
          </button>
          <div className="chapter-options">
            <h1>Select Global Chapter:</h1>
            <ul>
              <li>
                <a href="#">UNITED KINGDOM</a>
              </li>
              <li>
                {" "}
                <a href="#">IRELAND</a>
              </li>
              <li>
                {" "}
                <a href="#">BRASIL</a>
              </li>
              <li>
                {" "}
                <a href="#">AUSTRALIA</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
