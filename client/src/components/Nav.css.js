import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  max-width: 100%;
  display: flex;
  justify-content: space-between;

  background: linear-gradient(to right, blue, navy);
`;

export const Logo = styled.div`
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
`;
export const Actions = styled.div`
  display: flex
  
  padding: 1rem;
`;

export const ActionItem = styled.div`
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 2rem;
  padding: 0 1rem;

  &:hover {
    color: lightblue;
  }
`;
