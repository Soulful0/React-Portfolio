import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Navigation() {
  return (
    <nav>
      <ul class="nav-wrap">
        <li class="nav-options">
          <NavLink class="nav-style" to="/" exact activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li class="nav-options">
          <NavLink class="nav-style" to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li class="nav-options">
          <NavLink class="nav-style" to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li class="nav-options">
          <NavLink class="nav-style" to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
