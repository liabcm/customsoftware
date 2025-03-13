import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.secondaryColor};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin-left: 1.5rem;
    text-decoration: none;
    &:hover {
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
