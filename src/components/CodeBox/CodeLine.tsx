import React, { FC, useState, useEffect } from 'react';
import { CodeLineContainer, Cursor } from './Styles';

interface ICodeLine {
  text: string;
  start: number;
  symbol: string;
  firstLetter?: number;
  preText?: string;
  suggestion?: string;
  showList?: boolean;
  speed?: number;
}

const CodeLine: FC<ICodeLine> = (props) => {
  const [text, setText] = useState<string>('');
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [hasFirstLetter, setHasFirstLetter] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!hasStarted) {
        setHasStarted(true);
      }
    }, props.start);

    setTimeout(() => {
      if (!hasFirstLetter) {
        setHasFirstLetter(true);
      }
    }, props.firstLetter || props.start);
  }, []);

  useEffect(() => {
    if (!hasStarted || !hasFirstLetter) {
      return;
    }

    if (!props.speed) {
      setText(props.text);
      return;
    }

    if (text.length >= props.text.length) {
      return;
    }

    const letterList = props.text.split('').reverse();
    const letterIndex = props.text.length - text.length;

    if (letterIndex < 1) {
      return;
    }

    const deviation = Math.floor(Math.random() * 75) / 100;
    const operator = Math.round(Math.random()) * 2 - 1;
    const variance = 1 + deviation * operator;

    setTimeout(() => {
      setText((prevText: string) => prevText + letterList[letterIndex - 1]);
    }, props.speed * variance);
  }, [text, hasStarted, hasFirstLetter]);

  const content = () => {
    if (!hasStarted) {
      return null;
    }

    const isLastLetter = props.text.length === text.length;
    const symbol = () => (props.preText ? <code>{props.symbol}</code> : <span>{props.symbol}</span>);
    const pre = () => (props.preText ? <pre>{props.preText}</pre> : null);
    const suggestion = () => (props.suggestion ? <i>{props.suggestion}</i> : null);


    if (!hasFirstLetter) {
      return (
        <>
          {symbol()}
          <div>
            {pre()} {suggestion()}
          </div>
        </>
      );
    }

    return (
      <>
        {symbol()}{' '}
        <div>
          {pre()} {text}
          <Cursor theme={{ show: !isLastLetter }} />
        </div>
      </>
    );
  };

  return <CodeLineContainer>{content()}</CodeLineContainer>;
};

export default CodeLine;
