import { useState } from 'react';
import styled from 'styled-components';

const TemplatesStyled = styled.section`
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  text-align: center;
  width: 100%;
`;

const TabsContainer = styled.div`
  display: inline-flex;
`;

const Tab = styled.button<{ active?: boolean }>`
  background: ${({ active, theme }) =>
    active ? theme.primaryColor : 'transparent'};
  border: none;
  color: ${({ active, theme }) => (active ? '#fff' : theme.textColor)};
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.primaryColor : theme.secondaryColor};
    color: #fff;
  }
`;

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
  const [activeTab, setActiveTab] = useState('default');

  const handleTabClick = (themeKey: string) => {
    setActiveTab(themeKey);
    setTheme(themes[themeKey]);
  };

  return (
    <TemplatesStyled id='templates'>
      <TabsContainer>
        {templatesData.map((template) => (
          <Tab
            key={template.id}
            active={activeTab === template.themeKey}
            onClick={() => handleTabClick(template.themeKey)}
          >
            {template.title}
          </Tab>
        ))}
      </TabsContainer>
    </TemplatesStyled>
  );
};

export default Templates;
