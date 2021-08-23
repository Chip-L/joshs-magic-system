import React from "react";
// CSS
import { ActionItem, Actions, Logo, Navbar, NavLink } from "./Nav.css";
//State Store
import { useStoreContext } from "../store/globalState";
// Utils
import Auth from "../utils/authentication";

// const logout = (event) => {
//   Auth.logout();
// };

const Nav = () => {
  const [{ user }] = useStoreContext();

  return (
    <>
      <Navbar>
        <NavLink to="/">
          <Logo>Josh's Magic System</Logo>
        </NavLink>
        <Actions>
          {user._id && Auth.loggedIn() ? (
            <ActionItem onClick={() => Auth.logout()}>Log Out</ActionItem>
          ) : null}
        </Actions>
      </Navbar>
    </>
  );
};

export default Nav;
