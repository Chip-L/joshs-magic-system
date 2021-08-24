import React from "react";
// CSS
import { MenuItem, Menu, Logo, Navbar, NavLink } from "./Nav.css";
//State Store
import { useStoreContext } from "../store/globalState";
// Utils
import Auth from "../utils/authentication";

const Nav = () => {
  const [{ user }] = useStoreContext(); // keep this so that the page refreshes with auth

  return (
    <>
      <Navbar>
        <NavLink to="/">
          <Logo>
            SKILL<i>d</i>20
          </Logo>
        </NavLink>
        <Menu>
          {Auth.isLoggedIn() ? (
            <>
              <NavLink to="/addspell">
                <MenuItem>Add Spell</MenuItem>
              </NavLink>
              <MenuItem onClick={() => Auth.logout()}>Log Out</MenuItem>
            </>
          ) : null}
        </Menu>
      </Navbar>
    </>
  );
};

export default Nav;
