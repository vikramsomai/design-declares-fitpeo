import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>
          {isOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="home-icon"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg> // Up arrow
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="home-icon"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg> // Down arrow
          )}
        </span>
      </div>

      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
