import "././Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="/icon.svg" alt="Logo" className="logo-img" />
      </Link>
    </div>
  );
}

export default Header;
