import styled from 'styled-components';

const IntroStyled = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.primaryColor} 0%,
    ${({ theme }) => theme.secondaryColor} 100%
  );
  color: #fff;
  text-align: center;
  width: 100%;
  clip-path: ellipse(150% 100% at 50% 0%);
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  margin: 0 auto;
  max-width: 800px;
  line-height: 1.5;
`;

const Intro = () => {
  return (
    <IntroStyled id='intro'>
      <Title>Kruger Co Custom Websites and Software</Title>
      <Paragraph>
        At Kruger Co, we specialize in creating custom websites and software
        solutions tailored to your unique business needs. Whether you’re looking
        for a stunning website to showcase your brand or a powerful software
        application to streamline your operations, we’ve got you covered.
      </Paragraph>
    </IntroStyled>
  );
};

export default Intro;
