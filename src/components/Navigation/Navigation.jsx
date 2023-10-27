import { StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">About</StyledNavLink>
      <StyledNavLink to="/projects">MyProjects</StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
