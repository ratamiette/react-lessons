import React, { Component } from "react";

/**
 * Converted NavBar class component to Stateless Functional Component.
 * The reference to "this" only works in class components, in functional components, we need to add props as a parameter.
 * React will pass the props object as an argument to this object at run time.
 */
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
