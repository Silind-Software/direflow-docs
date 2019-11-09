import React, { FC } from 'react';
import {
  JumbotronContainer,
  Subtext,
  Button,
  Highligt,
  ButtonContainer,
  SecondaryButton,
  HeadlineImage,
} from './Styles';
import { Link } from '@reach/router';

const Jumbotron: FC = () => {
  return (
    <JumbotronContainer>
      <HeadlineImage />
      <Subtext>
        Use the best of two worlds.
        <br />
        Create fast, performant, native <Highligt>Web Components</Highligt> using <Highligt>React</Highligt>.
      </Subtext>
      <ButtonContainer>
        <Link to='/introduction'>
          <Button>→ Get Started</Button>
        </Link>
        <a href='https://github.com/Silind-Software/direflow' target='_blank'>
          <SecondaryButton>View on Github</SecondaryButton>
        </a>
      </ButtonContainer>
    </JumbotronContainer>
  );
};

export default Jumbotron;
