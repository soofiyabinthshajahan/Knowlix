import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiBell, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const HeaderSection = styled.header`
  height: 10vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 6vh;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img.desktop-logo {
    width: 90px;
    height: 60px;
    object-fit: contain;

    @media (max-width: 768px) {
      display: none;
    }
  }

  img.mobile-logo {
    display: none;
    width: 70px;
    height: 50px;
    object-fit: contain;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  border: 2px solid rgba(15, 61, 46, 0.3);
  border-radius: 20px;
  padding: 6px 14px;
  margin: 0 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #0f3d2e;
  font-size: 1rem;
  padding-left: 10px;

  &::placeholder {
    color: #888;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: #0f3d2e;
  cursor: pointer;

  @media (max-width: 992px) {
    display: block;
  }
`;

const HeaderElements = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Element = styled.li`
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 400;
  color: #477e6a;
  transition: color 0.3s ease;

  &:hover {
    color: #158a68;
  }
`;

const Button = styled.button`
  background-color: #477e6a;
  color: #ffffff;
  font-weight: 500;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #158a68;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #0f3d2e;
  cursor: pointer;

  svg {
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #22a884;
    }
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 20px 5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <>
      <HeaderSection>
        <Logo>
          <img src="/Logo.jpg" alt="Logo" className="desktop-logo" />
          <img src="/Logo-removebg-preview.png" alt="Mobile Logo" className="mobile-logo" />
        </Logo>

        <SearchBar>
          <FiSearch color="#14432b" size={20} />
          <SearchInput type="text" placeholder="Search..." />
        </SearchBar>

        <Navigation>
          <HeaderElements>
            <Element>Home</Element>
            <Element>About</Element>
            <Element>Courses</Element>
            <Element>Programmes</Element>
            <Element>Team</Element>
            <Element>Career</Element>
            <Element>Contact</Element>
          </HeaderElements>
          <Button>Book a Demo</Button>
          <IconWrapper>
            <FiBell />
            {isDark ? <FiSun onClick={toggleTheme} /> : <FiMoon onClick={toggleTheme} />}
          </IconWrapper>
        </Navigation>

        <MobileMenuIcon onClick={toggleMobileMenu}>
          {showMobileMenu ? <FiX /> : <FiMenu />}
        </MobileMenuIcon>
      </HeaderSection>

      {showMobileMenu && (
        <MobileMenu>
          <HeaderElements>
            <Element>Home</Element>
            <Element>About</Element>
            <Element>Courses</Element>
            <Element>Programmes</Element>
            <Element>Team</Element>
            <Element>Career</Element>
            <Element>Contact</Element>
          </HeaderElements>
          <Button>Book a Demo</Button>
          <IconWrapper>
            <FiBell />
            {isDark ? <FiSun onClick={toggleTheme} /> : <FiMoon onClick={toggleTheme} />}
          </IconWrapper>
        </MobileMenu>
      )}
    </>
  );
}

export default Header;
