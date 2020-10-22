import React from "react";

/**
 * Converted NavBar class component to Stateless Functional Component.
 * The reference to "this" only works in class components, in functional components, we need to add props as a parameter.
 * React will pass the props object as an argument to this object at run time.
 * Note: We can not use lifecycle hooks in Stateless Function Component, because here we have a single function that returns the output of this component, so if
 * is need to use the lifecycle hooks we can only use class components.
 */
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
