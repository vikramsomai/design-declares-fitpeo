import "././Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="icon.svg" alt="Logo" />
      </Link>
    </div>
  );
}

export default Header;
