import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    background-color: #FFFFFF;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 100;

    @media screen and (max-width: 768px) {
        height: auto;
        flex-direction: row;
        align-items: stretch;
        flex-wrap: wrap;
    }
`;

const NavbarNav = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        align-items: stretch;
        width: 100%;
        justify-content: center;
    }
`;

const Logo = styled.img`
    width: 90px;
    height: auto;
    margin-right: 20px;
`;

const NavItem = styled.li`
    margin-left: 20px;

    @media screen and (max-width: 768px) {
        margin: 10px 0;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #2C3892;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #F0F0F0;
        color: #2C3892;
    }

    @media screen and (max-width: 768px) {
        padding: 15px;
        text-align: center;
        width: auto;
    }
`;

const NavLinkBtn = styled(Link)`
    color: #F68712;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    background-color: #2C3892;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #F68712;
        color: #FFFFFF;
    }

    @media screen and (max-width: 768px) {
        padding: 15px;
        text-align: center;
        width: auto;
    }
`;

function Header() {
  return (
    <>
      <Navbar>
        <NavLink to="/">
          <Logo src="tropicius-travel-agency.png" alt="Logo" />
        </NavLink>
        <NavbarNav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/guides">Guides</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tours">Tours</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/forguide">For Guides</NavLink>
          </NavItem>
          <NavItem>
            <NavLinkBtn to="/singin/on">Sign in / on</NavLinkBtn>
          </NavItem>
        </NavbarNav>
      </Navbar >
    </>
  );
}

export default Header;
