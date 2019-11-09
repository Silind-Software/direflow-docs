import React, { FC } from 'react';
import {
  Container,
  Headline,
  IllustrationContainer,
  IllustrationSection,
  ReactIcon,
  IllustrationHeadline,
  BuildBox,
  BuildBoxHeader,
  BuildBoxBackground,
  BuildBoxImage,
  WcIcon,
  IllustrationContent,
  SubText,
  ArrowLine,
  ArrowLineContainer,
  ArrawLineWrapper,
  IllustrationWrapper,
} from './Styles';
import { Link } from '@reach/router';
import { Button } from '../Jumbotron/Styles';

const HowItWorks: FC = () => {
  return (
    <Container>
      <SubText>Use the power of React to create your component.</SubText>
      <SubText>Build it, then use it and share it as a native Web Component.</SubText>
      <IllustrationWrapper>
        <IllustrationContainer>
          <IllustrationSection>
            <IllustrationContent>
              <ReactIcon />
            </IllustrationContent>
            <IllustrationHeadline>React</IllustrationHeadline>
          </IllustrationSection>

          <IllustrationSection>
            <IllustrationContent>
              <BuildBoxHeader>Build</BuildBoxHeader>
              <BuildBox>
                <BuildBoxBackground />
                <BuildBoxImage />
              </BuildBox>
            </IllustrationContent>
            <IllustrationHeadline>Direflow</IllustrationHeadline>
          </IllustrationSection>

          <IllustrationSection>
            <IllustrationContent>
              <WcIcon />
            </IllustrationContent>
            <IllustrationHeadline>Web Component</IllustrationHeadline>
          </IllustrationSection>
        </IllustrationContainer>

        <ArrowLineContainer>
          <ArrawLineWrapper><ArrowLine /></ArrawLineWrapper>
          <ArrawLineWrapper><ArrowLine /></ArrawLineWrapper>
        </ArrowLineContainer>
      </IllustrationWrapper>

      <Link to='/introduction'>
        <Button>→ Get Started</Button>
      </Link>
    </Container>
  );
};

export default HowItWorks;
