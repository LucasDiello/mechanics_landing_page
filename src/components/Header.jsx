import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import "../styles/header.css"

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <header
      className="header absolute top-0 left-0 w-[100%] p-[40px 15px] ps-10 z-10"
    >
      <div className="container flex justify-between items-center mx-auto">
        <a href="#" className="logo">
        </a>

        <nav className={`navbar ${navbar ? "active" : "hidden"}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link">
                Início
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Sobre
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Serviços
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Projetos
              </a>
            </li>

            <li>
              <a href="#" className="navbar-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <a href="#" className="btn hidden btn-primary">
          <span className="span">Orçamento</span>

          <span className="material-symbols-rounded">
            <BiArrowFromLeft />
          </span>
        </a>

        <button
          className={`nav-toggle-btn ${navbar ? "active" : ""}`}
          aria-label="alternar menu"
          data-nav-toggler
          onClick={() => setNavbar(!navbar)}
        >
          <span className="nav-toggle-icon icon-1"></span>
          <span className="nav-toggle-icon icon-2"></span>
          <span className="nav-toggle-icon icon-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
