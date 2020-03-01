import React, { FC, useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import useScrollDisplay from 'use-scroll-display';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Container, SideMenu, TopDots, MenuItem, ContentSection, Content } from './Styles';
import { codeSnippets } from './codeSnippets';

const CodeExample: FC = () => {
  const [codeExampleRef] = useScrollDisplay();
  const [menuSelected, setMenuSelcted] = useState(0);
  const [nextMenuSelected, setNextMenuSelected] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);

  const handleMenuChange = (menuIndex: number) => {
    setNextMenuSelected(menuIndex);
    setIsSwapping(() => {
      setTimeout(() => {
        setMenuSelcted(menuIndex);
        setIsSwapping(false);
      }, 350);

      return true;
    });
  };

  const renderMenus = codeSnippets.map((snippet, index: number) => {
    const onMenuChange = () => {
      handleMenuChange(index);
    };

    return (
      <MenuItem
        key={JSON.stringify(snippet)}
        theme={{ active: index === nextMenuSelected }}
        onClick={onMenuChange}
      >
        {snippet.menuName}
      </MenuItem>
    );
  });

  const renderContent = () => {
    const posisitonStyle = isSwapping
      ? { transform: 'translate(0, 0)', transition: '0.2s' }
      : { transform: 'translate(-50%, 0)', transition: '0s' };

    return (
      <ContentSection id='snippet-container' style={posisitonStyle}>
        <SyntaxHighlighter
          language={codeSnippets[nextMenuSelected].language}
          style={darcula}
          customStyle={{ background: 'none', width: '100%' }}
        >
          {codeSnippets[nextMenuSelected].snippet}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language={codeSnippets[menuSelected].language}
          style={darcula}
          customStyle={{ background: 'none', width: '100%' }}
        >
          {codeSnippets[menuSelected].snippet}
        </SyntaxHighlighter>
      </ContentSection>
    );
  };

  return (
    <Container ref={codeExampleRef}>
      <SideMenu>
        <TopDots>
          <span />
          <span />
          <span />
        </TopDots>

        {renderMenus}
      </SideMenu>
      <Content>{renderContent()}</Content>
    </Container>
  );
};

export default CodeExample;
