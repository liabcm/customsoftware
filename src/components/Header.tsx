import styled from 'styled-components';

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.secondaryColor};
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.3s ease;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Nav = styled.nav`
  a {
    color: #fff;
    margin-left: 1.5rem;
    font-weight: 500;
    transition: color 0.3s ease;
    &:hover {
      color: ${({ theme }) => theme.primaryColor};
      text-decoration: underline;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    a {
      margin: 0.5rem 0;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Logo>Kruger Co</Logo>
      <Nav>
        <a href='#intro'>Home</a>
        <a href='#templates'>Templates</a>
        <a href='#contact'>Contact</a>
      </Nav>
    </HeaderStyled>
  );
};

export default Header;
