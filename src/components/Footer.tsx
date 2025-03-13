import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: white;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>© {new Date().getFullYear()} Kruger Co Custom Websites and Software</p>
    </FooterStyled>
  );
};

export default Footer;
