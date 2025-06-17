import { useState, useRef, useEffect } from "react";
import "./CustomDropdown.css";

const CustomDropdown = ({ label, name, required = false, options }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="form-group custom-dropdown" ref={dropdownRef}>
      <label>
        {label}
        {required && "*"}
      </label>
      <div
        className={`dropdown-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || "             "}
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((opt, idx) => (
            <li key={idx} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
      <input type="hidden" name={name} value={selected} required={required} />
    </div>
  );
};

export default CustomDropdown;
