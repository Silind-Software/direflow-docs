import React, { FC, useState, useEffect } from 'react';
import { CodeBlockContainer } from './Styles';

interface IProps {
  textPrimary: string;
  textSecondary: string;
  start: number;
}

const CodeBlock: FC<IProps> = (props) => {
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!hasStarted) {
        setHasStarted(true);
      }
    }, props.start);
  }, []);

  const content = () => {
    if (!hasStarted) {
      return null;
    }

    return (
      <>
        <p>{props.textPrimary}<s>{props.textSecondary}</s></p>
      </>
    )
  }

  return (
    <CodeBlockContainer>
      {content()}
    </CodeBlockContainer>
  );
};

export default CodeBlock;
