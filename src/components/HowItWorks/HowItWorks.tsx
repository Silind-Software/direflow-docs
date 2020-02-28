import React, { FC } from 'react';
import {
  Container,
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
import useAnimateDisplay from '../../hooks/useAnimateDisplay';

const HowItWorks: FC = () => {
  const illustrationOneRef = useAnimateDisplay();
  const illustrationTwoRef = useAnimateDisplay();
  const illustrationThreeRef = useAnimateDisplay();

  const linesOneRef = useAnimateDisplay();
  const linesTwoRef = useAnimateDisplay();

  return (
    <Container>
      <SubText>Use the power of React to create your component.</SubText>
      <SubText>Build it, then use it and share it as a native Web Component.</SubText>
      <IllustrationWrapper>
        <IllustrationContainer ref={illustrationOneRef}>
          <IllustrationSection>
            <IllustrationContent>
              <ReactIcon />
            </IllustrationContent>
            <IllustrationHeadline>React</IllustrationHeadline>
          </IllustrationSection>

          <IllustrationSection ref={illustrationTwoRef}>
            <IllustrationContent>
              <BuildBoxHeader>Build</BuildBoxHeader>
              <BuildBox>
                <BuildBoxBackground />
                <BuildBoxImage />
              </BuildBox>
            </IllustrationContent>
            <IllustrationHeadline>Direflow</IllustrationHeadline>
          </IllustrationSection>

          <IllustrationSection ref={illustrationThreeRef}>
            <IllustrationContent>
              <WcIcon />
            </IllustrationContent>
            <IllustrationHeadline>Web Component</IllustrationHeadline>
          </IllustrationSection>
        </IllustrationContainer>

        <ArrowLineContainer>
          <ArrawLineWrapper ref={linesOneRef}><ArrowLine /></ArrawLineWrapper>
          <ArrawLineWrapper ref={linesTwoRef}><ArrowLine /></ArrawLineWrapper>
        </ArrowLineContainer>
      </IllustrationWrapper>

      <Link to='/introduction'>
        <Button>→ Get Started</Button>
      </Link>
    </Container>
  );
};

export default HowItWorks;
