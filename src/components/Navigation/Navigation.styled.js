import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
