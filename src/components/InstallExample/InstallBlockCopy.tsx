import React, { FC } from 'react';
import useScrollDisplay from 'use-scroll-display';
import { CodeBlock, CopyButton } from './Styles';

interface IProps {
  snippet: string;
  activeSnippet: string;
  setActive: (snippet: string) => void;
}

const InstallBlockCopy: FC<IProps> = (props: IProps) => {
  const [codeBlockRef] = useScrollDisplay();

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
      ? { border: '4px solid #9eadbf' }
      : { border: '4px solid #f1f5fa' };

  return (
    <CodeBlock ref={codeBlockRef} style={isActiveStyle}>
      <span>{props.snippet}</span>
      <CopyButton onClick={copyToClipboard}>Copy</CopyButton>
    </CodeBlock>
  );
};

export default InstallBlockCopy;
