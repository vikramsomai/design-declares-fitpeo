import "./FabMenu.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

function FabMenu({ isOpen, setIsOpen, setShowChapterOverlay }) {
  const menuRef = useRef();

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`fab-container ${isOpen ? "open" : ""}`} ref={menuRef}>
      <div className="fab-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span>Menu</span>
        <span style={{ borderLeft: "1px solid #000" }}>
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
              className="toggle-icon"
            >
              <path strokeLinecap="square" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 transition-transform toggle-icon"
              style={{ transform: "rotate(0deg)" }}
            >
              <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div className="fab-menu">
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="menu-icon"
                >
                  <path d="M1 10.75L11 2L21 10.75V22H1V10.75Z"></path>
                </svg>{" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="menu-icon"
                >
                  <rect x="9" y="9" width="4" height="12"></rect>
                  <rect x="9" y="1" width="4" height="4"></rect>
                </svg>{" "}
                About
              </Link>
            </li>
            <li>
              <Link to="/latest" onClick={() => setIsOpen(false)}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="menu-icon"
                >
                  <line x1="4.375" y1="5.55646" x2="11.125" y2="5.55646"></line>
                  <line x1="4.375" y1="10.0016" x2="11.125" y2="10.0016"></line>
                  <line x1="4.375" y1="14.4468" x2="11.125" y2="14.4468"></line>
                  <path d="M14.5 5.44188C16 5.44188 19 5.44188 19 5.44188C19 5.44188 19 14.3322 19 18.7774C19 19.3669 18.7629 19.9322 18.341 20.349C17.919 20.7658 17.3467 21 16.75 21M16.75 21C16.1533 21 15.581 20.7658 15.159 20.349C14.7371 19.9322 14.5 19.3669 14.5 18.7774C14.5 13.5924 14.5 1.00281 14.5 1.00281L1 1C1 1 1 12.8506 1 17.6661C1 18.5503 1.35558 19.3983 1.98851 20.0235C2.62145 20.6487 3.47989 21 4.375 21H16.75Z"></path>
                </svg>{" "}
                Latest
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 22 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="menu-icon"
                >
                  <rect x="1" y="1" width="20" height="16"></rect>
                  <path d="M21 2L11 10L1 2"></path>
                </svg>
                Contact
              </Link>
            </li>

            <li
              onClick={() => {
                setIsOpen(false);
                setShowChapterOverlay(true);
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                xmlns="http://www.w3.org/2000/svg"
                className="menu-icon"
              >
                <path d="M1.6684 7.66667H20.3351M1.6684 14.3333H20.3351M10.4441 1C8.57223 3.99957 7.57986 7.46429 7.57986 11C7.57986 14.5357 8.57223 18.0004 10.4441 21M11.5556 1C13.4274 3.99957 14.4198 7.46429 14.4198 11C14.4198 14.5357 13.4274 18.0004 11.5556 21M1 11C1 12.3132 1.25866 13.6136 1.7612 14.8268C2.26375 16.0401 3.00035 17.1425 3.92893 18.0711C4.85752 18.9997 5.95991 19.7363 7.17317 20.2388C8.38642 20.7413 9.68678 21 11 21C12.3132 21 13.6136 20.7413 14.8268 20.2388C16.0401 19.7363 17.1425 18.9997 18.0711 18.0711C18.9997 17.1425 19.7363 16.0401 20.2388 14.8268C20.7413 13.6136 21 12.3132 21 11C21 8.34784 19.9464 5.8043 18.0711 3.92893C16.1957 2.05357 13.6522 1 11 1C8.34784 1 5.8043 2.05357 3.92893 3.92893C2.05357 5.8043 1 8.34784 1 11Z"></path>
              </svg>{" "}
              Choose Global Chapter
            </li>
          </ul>
        </div>
      )}
      <div className="fab-declare">
        <a href="/#declaration">Declare Now</a>
      </div>
    </div>
  );
}

export default FabMenu;
