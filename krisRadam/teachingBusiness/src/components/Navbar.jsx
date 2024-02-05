import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.screenY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "NavbarItems"}`}>
      <div className="logo">
        <img src="" alt="Logo" id="krisLogo" />
      </div>

      <div className="menu-icons" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fas fa-bars"}></i>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}></ul>

      {MenuItem.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Navbar;
