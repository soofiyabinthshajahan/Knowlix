import React from "react";
import styled from "styled-components";
import { FiSearch, FiBell, FiSun, FiMoon } from "react-icons/fi";

const HeaderSection = styled.header`
  height: 10vh;
  background: rgba(255, 255, 255, 0.98);
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
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 100px;
    height: 80px;
    object-fit: contain;
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #0f3d2e;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  align-items: center;
  border: 2px solid rgba(15, 61, 46, 0.3);
  border-radius: 20px;
  padding: 8px 15px;
  margin: 0 40px;
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
`;

const HeaderElements = styled.ul`
  display: flex;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 0;
`;

const Element = styled.li`
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 400;
  color: #477e6a;
  transition: color 0.3s ease;
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

function Header() {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <HeaderSection>
      <Logo>
        <img src="/Logo.jpg" alt="Logo" />
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
          {isDark ? (
            <FiSun onClick={toggleTheme} />
          ) : (
            <FiMoon onClick={toggleTheme} />
          )}
        </IconWrapper>
      </Navigation>
    </HeaderSection>
  );
}

export default Header;
