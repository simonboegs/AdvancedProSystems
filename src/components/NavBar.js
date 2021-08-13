import * as React from "react";
import { Link } from "gatsby";
import logoImg from "../images/logo.png";
import justify from "../images/justify.svg";
import { useViewport } from "./Layout";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function NavBar(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const offcanvas = (
    <div className="offcanvas offcanvas-start" id="offcanvasNav">
      <div className="offcanvas-header">
        <h5 class="offcanvas-title">Offcanvas</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
        <div class="offcanvas-body">
          <div>whatup</div>
        </div>
      </div>
    </div>
  );

  const desktop = (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center align-items-center py-3">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <img class="bi me-2" height="100px" src={logoImg} />
        </Link>
        <ul className="nav nav-pills">
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
          <li className="nav-item border border-primary rounded">
            <Link to="/contact" className="nav-link" activeClassName="active" aria-current="page">
              <strong>Contact</strong>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const mobile = (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <img class="bi me-2" height="100px" src={logoImg} />
          </Link>
        </div>
        <div className="col text-end">
          <button className="navbar-toggler">
            <a
              href={offcanvas}
              data-bs-toggle="offcanvas"
              role="button"
              aria-controls="offcanvasNav"
            >
              <img height="40px" src={justify} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );

  return width < breakpoint ? mobile : desktop;
}
