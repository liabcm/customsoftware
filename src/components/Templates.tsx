import styled from 'styled-components';

const TemplatesStyled = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.backgroundColor};
  text-align: center;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textColor};
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  width: 200px;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.textColor};
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => darken(theme.primaryColor, 10)};
  }
`;

const darken = (color: string, percent: number) => {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, (num >> 16) - amt);
  const G = Math.max(0, ((num >> 8) & 0x00ff) - amt);
  const B = Math.max(0, (num & 0x0000ff) - amt);
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
};

const templatesData = [
  { id: 1, title: 'Default Style', themeKey: 'default' },
  { id: 2, title: 'Dark Mode', themeKey: 'dark' },
  { id: 3, title: 'Vibrant Look', themeKey: 'vibrant' },
];

interface TemplatesProps {
  setTheme: (theme: any) => void;
  themes: any;
}

const Templates = ({ setTheme, themes }: TemplatesProps) => {
  return (
    <TemplatesStyled id='templates'>
      <Heading>Choose a Style</Heading>
      <Grid>
        {templatesData.map((template) => (
          <Card
            key={template.id}
            onClick={() => setTheme(themes[template.themeKey])}
          >
            <CardTitle>{template.title}</CardTitle>
          </Card>
        ))}
      </Grid>
    </TemplatesStyled>
  );
};

export default Templates;
