import React from "react";
import { Link } from "react-router-dom";
import { Logo, Navbar, NavLink } from "./Nav.css";

//State Store

const Nav = () => {
  return (
    <>
      <Navbar>
        <NavLink to="/">
          <Logo>Josh's Magic System</Logo>
        </NavLink>
      </Navbar>
    </>
  );
};

export default Nav;
