import React, { FC } from 'react';
import useScrollDisplay from 'use-scroll-display';
import {
  Container,
  IllustrationContainer,
  IllustrationSection,
  ReactIcon,
  IconHolder,
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
  BuildBoxText,
} from './Styles';

const HowItWorks: FC = () => {
  return (
    <Container>
      <IllustrationWrapper>
        <ArrowLineContainer>
          <ArrowLineWrapper>
            <ArrowLine />
          </ArrowLineWrapper>
          <ArrowLineWrapper>
            <ArrowLine />
          </ArrowLineWrapper>
        </ArrowLineContainer>

        <IllustrationContainer>
          <IllustrationSection>
            <IllustrationContent>
              <BuildBoxHeader>Create</BuildBoxHeader>
              <IconHolder>
                <ReactIcon />
              </IconHolder>
            </IllustrationContent>
            <IllustrationHeadline>React</IllustrationHeadline>
          </IllustrationSection>

          <IllustrationSection>
            <IllustrationContent>
              <BuildBoxHeader>Build</BuildBoxHeader>
              <BuildBox>
                <BuildBoxBackground />
                <BuildBoxImage />
                <BuildBoxText>
                  Powered by&nbsp;
                  <a href='https://github.com/facebook/create-react-app' target='_blank'>
                    react-scripts
                  </a>
                </BuildBoxText>
              </BuildBox>
            </IllustrationContent>
            <IllustrationHeadline>Direflow</IllustrationHeadline>
          </IllustrationSection>

          <IllustrationSection>
            <IllustrationContent>
              <BuildBoxHeader>Consume</BuildBoxHeader>
              <IconHolder>
                <WcIcon />
              </IconHolder>
            </IllustrationContent>
            <IllustrationHeadline>Web Component</IllustrationHeadline>
          </IllustrationSection>
        </IllustrationContainer>
      </IllustrationWrapper>
    </Container>
  );
};

export default HowItWorks;
