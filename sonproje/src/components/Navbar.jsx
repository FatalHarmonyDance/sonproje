import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarStyle.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ⛰️BurSanat
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">
              Ana sayfa
            </NavLink>
            <NavLink className="nav-link" to="/etkinlikler">
              Etkinlikler
            </NavLink>
            <NavLink className="nav-link" to="/burfas">
              BURFAŞ
            </NavLink>
            <NavLink className="nav-link" to="/about">
              Hakkımızda
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Giriş/Kayıt
            </NavLink>
          </ul>
          <div className="search-container">
            <form className="d-flex" role="search">
              <input
                className="form-control me-1 search-input"
                type="search"
                placeholder="Sitede Ara..."
                aria-label="search"
              />
              <button className="btn btn-outline-success" type="submit">
                Ara
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
