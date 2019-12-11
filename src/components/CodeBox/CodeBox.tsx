import React, { FC } from 'react';
import { CodeBoxContainer, DotLine, Dots, CodeContainer } from './Styles';
import CodeLine from './CodeLine';
import { Space } from '../../styles/MainStyles';
import CodeBlock from './CodeBlock';
import CodeList from './CodeList';

const CodeBox: FC = () => {
  return (
    <CodeBoxContainer>
      <DotLine>
        <Dots />
      </DotLine>
      <CodeContainer>
        <CodeLine text='direflow create -c' symbol='λ' speed={100} start={0} firstLetter={500} />
        <Space theme={{ height: '20' }} />
        <CodeLine
          preText='Choose a name for your Direflow Setup: '
          suggestion='(awesome-component)'
          text='awesome-component'
          symbol='?'
          speed={100}
          start={3500}
          firstLetter={4500}
        />
        <CodeLine
          preText='Give your component a description (optional): '
          text='This component is awesome!'
          speed={75}
          start={7500}
          firstLetter={8500}
          symbol='?'
        />
        <Space theme={{ height: '20' }} />
        <CodeList
          question='Which language do you want to use?'
          answers={['JavaScript', 'TypeScript']}
          symbol='?'
          start={11000}
          speed={800}
        />
        <CodeBlock
          textPrimary={`
  Your Direflow Setup is ready!
  To get started:

    cd awesome-component
    yarn install
    yarn start

  The Direflow Setup will be running at: `}
          textSecondary='localhost:3000'
          start={13000}
        />
      </CodeContainer>
    </CodeBoxContainer>
  );
};

export default CodeBox;
