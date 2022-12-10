import React from 'react';
import { Link } from 'react-router-dom';

import Hdown from "../../assets/images/icon/Hdown.svg";
import logo from "../../assets/images/whole.png";
import './header.css'

const Header = () => {
    return (
      <div>
        <div className="d-flex"></div>
        <nav className="navbar navbar-expand-md bg-white d-none d-md-flex">
          <div className="d-flex mx-5 me-auto">
            <Link to="/" className="navbar-brand">
              <img className="w-100" src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="me-auto" id="navbarSupportedContent">
            <form className="d-flex" style={{ width: "300px" }} role="search">
              
              <input
                className="form-control me-2 rounded-pill text-center w-100"
                type="search"
                placeholder="Search for your faviorte group in ATG"
                aria-label="Search"
              />
            </form>
          </div>
          <span className=" h5 fw-bold">
            Create account.
            <Link
              className="text-primary fw-bold text-decoration-none"
              to="/"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalBox2"
            >
              It's free! <img src={Hdown} alt="" />
            </Link>
          </span>
        </nav>
      </div>
    );
};

export default Header;