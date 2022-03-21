import * as React from "react";
import { Link } from "gatsby";
import logoImg from "../images/logo.png";
import justify from "../images/justify.svg";
import x from "../images/x-lg.svg";
import { useViewport } from "./Layout";
import OffCanvas from "react-aria-offcanvas";
import { overlay, hamburger, navItem } from "./NavBar.module.css";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

function offcanvas() {
  return (
    <nav id="menu">
      <ul>
        <li>
          <a href="#m-i-1">Menu Item 1</a>
        </li>
        <li>
          <a href="#m-i-2">Menu Item 2</a>
        </li>
        <li>
          <a href="#m-i-3">Menu Item 3</a>
        </li>
        <li>
          <a href="#m-i-4">Menu Item 4</a>
        </li>
        <li>
          <a href="#m-i-5">Menu Item 5</a>
        </li>
      </ul>
    </nav>
  );
}

export function NavBar(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const [isOpen, setIsOpen] = React.useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const desktop = (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center align-items-center py-2">
        <Link to="/" className="d-flex align-items-center me-md-auto text-decoration-none">
          <img class="bi me-2" height="100px" src={logoImg} />
        </Link>
        <ul className="nav nav-pills align-items-center">
          <li className="nav-item">
            <Link to="/" className="nav-link" activeClassName="active" aria-current="page">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" activeClassName="active" aria-current="page">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link" activeClassName="active" aria-current="page">
              Services
            </Link>
          </li>
          <li
            className="nav-item border border-3 border-primary ms-2"
            style={{ borderRadius: "10px" }}
          >
            <Link to="/contact" className="nav-link" activeClassName="active" aria-current="page">
              <strong>Contact</strong>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const mobile = (
    <div className="container-lg">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-2">
        <Link to="/" className="d-flex align-items-center me-md-auto text-decoration-none">
          <img class="bi me-2" height="70px" src={logoImg} />
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button onClick={isOpen ? close : open} className={hamburger}>
              {isOpen ? <img height="30px" src={x} /> : <img height="40px" src={justify} />}
            </button>
            <OffCanvas
              style={{
                content: {
                  background: "white",
                  borderRadius: "5px",
                  marginTop: "85px",
                },
                overlay: {
                  backgroundColor: "rgb(0, 0, 0, 0.5)",
                },
              }}
              isOpen={isOpen}
              onClose={close}
              closeOnEsc
              position="right"
              height="160px"
            >
              <div className="" style={{ height: "100%" }}>
                <ul className="nav flex-column nav-pills">
                  <li className={navItem}>
                    <Link to="/" className="nav-link" activeClassName="active" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className={navItem}>
                    <Link
                      to="/services"
                      className="nav-link"
                      activeClassName="active"
                      aria-current="page"
                    >
                      Services
                    </Link>
                  </li>
                  <li className={navItem}>
                    <Link
                      to="/about"
                      className="nav-link"
                      activeClassName="active"
                      aria-current="page"
                    >
                      About APS
                    </Link>
                  </li>
                  <li className={navItem}>
                    <Link
                      to="/contact"
                      className="nav-link"
                      activeClassName="active"
                      aria-current="page"
                    >
                      <strong>Contact</strong>
                    </Link>
                  </li>
                </ul>
              </div>
            </OffCanvas>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <section style={{ background: props.bgColor }}>{width < breakpoint ? mobile : desktop}</section>
    // <section style={{ background: props.bgColor }}>{desktop}</section>
  );
}
