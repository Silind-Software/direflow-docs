import React, { FC, useState } from 'react';
import InstallBlockCopy from './InstallBlockCopy';
import { Container } from './Styles';

const InstallExample: FC = () => {
  const [currentSnippet, setCurrentSnippet] = useState<string>('');

  return (
    <Container>
      <InstallBlockCopy
        snippet='npm i -g direflow-cli'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <InstallBlockCopy
        snippet='direflow create'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <InstallBlockCopy
        snippet='cd <project-name>'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <InstallBlockCopy
        snippet='npm install'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <InstallBlockCopy
        snippet='npm start'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
    </Container>
  );
};

export default InstallExample;
