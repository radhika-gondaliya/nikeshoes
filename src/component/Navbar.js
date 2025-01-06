import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg"
            alt="logo"
          ></img>
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Menu"
                className={location.pathname === "/Menu" ? "active" : ""}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={location.pathname === "/About" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={location.pathname === "/Contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={handleLoginClick}>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
