import React, { FC } from 'react';
import { CodeBlock, CopyButton } from './Styles';

interface IProps {
  snippet: string;
  activeSnippet: string;
  setActive: (snippet: string) => void;
}

const CodeBlockCopy: FC<IProps> = (props: IProps) => {
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = props.snippet;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    props.setActive(props.snippet);
  };

  const isActiveStyle =
    props.activeSnippet === props.snippet
      ? { border: '3px solid #9eadbf' }
      : { border: '3px solid #f1f5fa' };

  return (
    <CodeBlock style={isActiveStyle}>
      <span>{props.snippet}</span>
      <CopyButton onClick={copyToClipboard}>Copy</CopyButton>
    </CodeBlock>
  );
};

export default CodeBlockCopy;
