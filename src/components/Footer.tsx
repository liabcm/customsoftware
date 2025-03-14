import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.secondaryColor};
  color: #fff;
  text-align: center;
  width: 100%;
  font-size: 0.9rem;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>© {new Date().getFullYear()} Kruger Co Custom Websites and Software</p>
    </FooterStyled>
  );
};

export default Footer;
