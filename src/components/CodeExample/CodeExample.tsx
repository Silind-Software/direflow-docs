import React, { FC, useState } from 'react';
import { Container, CodeBlock, CopyButton } from './Styles';
import CodeBlockCopy from './CodeBlockCopy';

const CodeExample: FC = () => {
  const [currentSnippet, setCurrentSnippet] = useState<string>('');

  return (
    <Container>
      <CodeBlockCopy
        snippet='npm i -g direflow-cli'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <CodeBlockCopy
        snippet='direflow create'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <CodeBlockCopy
        snippet='cd <project-name>'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <CodeBlockCopy
        snippet='npm install'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
      <CodeBlockCopy
        snippet='npm start'
        activeSnippet={currentSnippet}
        setActive={setCurrentSnippet}
      />
    </Container>
  );
};

export default CodeExample;
