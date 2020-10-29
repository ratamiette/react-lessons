import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to="/movies" className="nav-link">
            Movies
          </NavLink>
          <NavLink to="/customers" className="nav-link">
            Customers
          </NavLink>
          <NavLink to="/rentals" className="nav-link">
            Rentals
          </NavLink>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
