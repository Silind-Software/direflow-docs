import React, { FC, useState, useEffect } from 'react';
import { CodeQuestionContainer } from './Styles';

interface IProps {
  question: string;
  answers: string[];
  symbol: string;
  start: number;
  speed: number;
}

const CodeList: FC<IProps> = (props) => {
  const [selected, setSelected] = useState<number>(0);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!hasStarted) {
        setHasStarted(true);
      }
    }, props.start);

    setTimeout(() => {
      setSelected(1);
    }, props.start + props.speed);

    setTimeout(() => {
      setHasSelected(true);
    }, props.start + (props.speed * 2));

  }, []);

  const content = () => {
    if (!hasStarted) {
      return null;
    }
    
    if (hasSelected) {
      return (
        <>
          <div>
            <code>{props.symbol}</code>
            <pre>{props.question}</pre>
            <i>{props.answers[1]}</i>
          </div>
        </>
      )
    }

    const answers = props.answers.map((answer: string, index: number) => {
      if (index === selected) {
        return (
          <div key={answer}>
            <span>❯</span>
            <s>{answer}</s>
          </div>
        );
      }

      return (
        <div key={answer}>
          <span>❯</span>
          {answer}
        </div>
      );
    });

    return (
      <>
        <div>
          <code>{props.symbol}</code>
          <pre>{props.question}</pre>
        </div>
        {answers}
      </>
    );
  };

  return <CodeQuestionContainer>{content()}</CodeQuestionContainer>;
};

export default CodeList;
