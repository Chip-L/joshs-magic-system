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
