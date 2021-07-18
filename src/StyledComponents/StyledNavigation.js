import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const NavWrapper = styled.div`
  .navbar-link {
    text-decoration: none;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: white;
    transition: 0.3s;
  }

  a {
    margin: 0 1em;
  }
`;

export const NavbarBrand = styled(Navbar.Brand)`
  font-size: 1.7em;
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.4rem;

  @media screen and (max-width: 1000px) {
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
  }
`;

export const BrandImage = styled.img`
  height: 50px;
  width: 50px;
`;