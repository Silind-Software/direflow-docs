import React, { FC } from 'react';
import useScrollDisplay from 'use-scroll-display';
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
  ArrowLine,
  ArrowLineContainer,
  ArrowLineWrapper,
  IllustrationWrapper,
} from './Styles';

const HowItWorks: FC = () => {
  const [illustrationOneRef] = useScrollDisplay();
  const [illustrationTwoRef] = useScrollDisplay();
  const [illustrationThreeRef] = useScrollDisplay();

  const [linesOneRef] = useScrollDisplay();
  const [linesTwoRef] = useScrollDisplay();

  return (
    <Container>
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
          <ArrowLineWrapper ref={linesOneRef}><ArrowLine /></ArrowLineWrapper>
          <ArrowLineWrapper ref={linesTwoRef}><ArrowLine /></ArrowLineWrapper>
        </ArrowLineContainer>
      </IllustrationWrapper>
    </Container>
  );
};

export default HowItWorks;
