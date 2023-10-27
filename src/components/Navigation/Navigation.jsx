import { StyledNav, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <section className="navigation">
      <div className="container">
        <StyledNav>
          <StyledNavLink to="/">About</StyledNavLink>
          <StyledNavLink to="/projects">MyProjects</StyledNavLink>
        </StyledNav>
      </div>
    </section>
  );
};

export default Navigation;
