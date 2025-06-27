import React, { useState, useRef, useEffect } from "react";
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

  @media (max-width: 1024px) {
    height: 6vh;
  }

  @media (max-width: 768px) {
    background: rgba(255, 255, 255, 0.76);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 6vh;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1001;

  img.desktop-logo {
    width: 90px;
    height: 60px;
    object-fit: contain;

    @media (max-width: 1024px) {
      width: 80px;
      height: 50px;
    }

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
  max-width: ${props => props.isExpanded ? '90%' : '400px'};
  display: flex;
  align-items: center;
  border: 2px solid rgba(15, 61, 46, 0.3);
  border-radius: 20px;
  padding: 6px 14px;
  margin: 0 20px;
  transition: all 0.3s ease;
  background: white;
  z-index: 1000;

  @media (max-width: 1024px) {
    position: ${props => props.isExpanded ? 'absolute' : 'relative'};
    left: ${props => props.isExpanded ? '5%' : 'auto'};
    max-width: ${props => props.isExpanded ? '90%' : '300px'};
    background: ${props => props.isExpanded ? 'white' : 'transparent'};
    box-shadow: ${props => props.isExpanded ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'};
  }

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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: #0f3d2e;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeaderElements = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
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

  @media (max-width: 1024px) {
    font-size: 1rem;
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

  @media (max-width: 1024px) {
    margin-top: 10px;
    padding: 6px 12px;
    font-size: 0.9rem;
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

  @media (max-width: 1024px) {
    gap: 12px;
    margin-top: 10px;

    svg {
      font-size: 18px;
    }
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 8vh;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 20px 5%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    top: 6vh;
    padding: 15px 5%;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: ${props => props.show ? 'block' : 'none'};
`;

function Header() {
  const [isDark, setIsDark] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const searchRef = useRef(null);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const handleSearchClick = () => {
    if (window.innerWidth <= 1024) {
      setSearchExpanded(true);
    }
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <HeaderSection>
        <Logo>
          <img src="/Logo.jpg" alt="Logo" className="desktop-logo" />
          <img
            src="/Logo-removebg-preview.png"
            alt="Mobile Logo"
            className="mobile-logo"
          />
        </Logo>

        <SearchBar 
          ref={searchRef} 
          isExpanded={searchExpanded}
          onClick={handleSearchClick}
        >
          <FiSearch color="#14432b" size={20} />
          <SearchInput 
            type="text" 
            placeholder="Search..." 
            onFocus={() => window.innerWidth <= 1024 && setSearchExpanded(true)}
          />
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
            {isDark ? (
              <FiSun onClick={toggleTheme} />
            ) : (
              <FiMoon onClick={toggleTheme} />
            )}
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
            {isDark ? (
              <FiSun onClick={toggleTheme} />
            ) : (
              <FiMoon onClick={toggleTheme} />
            )}
          </IconWrapper>
        </MobileMenu>
      )}

      <Overlay 
        show={searchExpanded} 
        onClick={() => setSearchExpanded(false)}
      />
    </>
  );
}

export default Header;