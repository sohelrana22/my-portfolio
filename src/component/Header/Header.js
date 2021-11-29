import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.jpg";


const Header = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo" href="/home">
              <img src={logo} alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <Link to="/home"><i className="uil uil-estate"></i>Home</Link>
              </li>
              <li>
                <Link to="/projects"><i className="uil uil-scenery"></i>Project</Link>
              </li>
              <li>
                <Link to="/services"><i className="uil uil-suitcase"></i>Services</Link>
              </li>
              <li>
                <Link to="/skills"><i className="uil uil-file-alt"></i>Skills</Link>
              </li>
              <li>
                <Link to="/blog"><i className="uil uil-blogger"></i>Blog</Link>
              </li>
              <li>
                <Link to="/about"><i className="uil uil-user"></i>About</Link>
              </li>
             <li>
                <Link to="/contact"><i className="uil uil-message"></i>Contact</Link>
              </li>
            
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Header;