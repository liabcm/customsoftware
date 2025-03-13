import styled from 'styled-components';

const IntroStyled = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  text-align: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  margin: 0 1rem;
`;

const Intro = () => {
  return (
    <IntroStyled id='intro'>
      <Title>Kruger Co Custom Websites and Software</Title>
      <Paragraph>
        At Kruger Co, we specialize in creating custom websites and software
        solutions tailored to your unique business needs for small to mid sized
        applications. Whether you’re looking for a stunning website to showcase
        your brand or a powerful software application to streamline your
        operations, we’ve got you covered.
      </Paragraph>
    </IntroStyled>
  );
};

export default Intro;
