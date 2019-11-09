import styled, { keyframes } from 'styled-components';
import { mainFont, center, secondaryFont } from '../../styles/Mixins';
import { device } from '../../styles/Device';
import reactLogo from '../../images/react-icon.svg';
import wcLogo from '../../images/wc-logo.svg';
import logo from '../../images/logo.svg';

const rotateAnimation = keyframes`
  100% { transform: rotate(360deg); }
`;

const skewAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(0deg); }
  35% { transform: rotate(35deg); }
  75% { transform: rotate(0deg); }
`;

const fillColorAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  40% {
    opacity: 0.5;
  }
  60% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    height: 200px;
  }
`;

const dashLineHorizAnimation = keyframes`
  from { transform: translate(0,0) }
  to { transform: translate(20px,0) }
`;

const dashLineVertiAnimation = keyframes`
  from { transform: translate(0,0) }
  to { transform: translate(0,20px) }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Headline = styled.div`
  font-size: 28px;
  color: #333;
  font-weight: bold;
  ${mainFont}
  margin-bottom: 10px;

  @media ${device.tablet} {
    font-size: 30px;
  }

  @media ${device.laptop} {
    font-size: 34px;
  }

  @media ${device.desktop} {
    font-size: 38px;
  }
`;

export const SubText = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  ${mainFont}
  text-align: center;
  box-sizing: border-box;
  padding: 0 25px;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 22px;
  }

  @media ${device.desktop} {
    font-size: 26px;
  }
`;

export const IllustrationWrapper = styled.div`
  position: relative;
`;

export const IllustrationContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  @media ${device.tablet} {
    width: 760px;
    flex-direction: row;
  }

  @media ${device.laptop} {
    width: 960px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }
`;

export const IllustrationSection = styled.div`
  width: 100%;
  ${center};
  flex-direction: column;
  margin-top: 50px;

  @media ${device.tablet} {
    margin-top: 0;
    height: 300px;
  }
`;

export const IllustrationContent = styled.div`
  width: 100%;
  min-height: 250px;
  ${center};
  flex-direction: column;
  position: relative;
`;

export const IllustrationHeadline = styled.div`
  color: #354999;
  font-weight: bold;
  margin-top: 10px;
  display: none;
  ${secondaryFont}

  @media ${device.tablet} {
    font-size: 18px;
    display: block;
  }

  @media ${device.laptop} {
    font-size: 22px;
  }

  @media ${device.desktop} {
    font-size: 26px;
  }
`;

export const Icon = styled.div`
  width: 50%;
  padding-bottom: 50%;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  box-shadow: 0 0 10px #ccc;

  @media ${device.tablet} {
    width: 50%;
    padding-bottom: 50%;
  }
`;

export const ReactIcon = styled(Icon)`
  background-image: url(${reactLogo});
  background-size: 100%;
  animation: ${rotateAnimation} 10s linear infinite;
`;

export const WcIcon = styled(Icon)`
  background-image: url(${wcLogo});
  background-size: 75%;
  animation: ${skewAnimation} 4s infinite;
`;

export const BuildBox = styled.div`
  width: 75%;
  height: 200px;
  position: absolute;
  background-color: white;
  box-shadow: 0 0 10px #ccc;
  ${center};
`;

export const BuildBoxImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${logo});
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
`;

export const BuildBoxBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #62DAFB;
  position: absolute;
  animation: ${fillColorAnimation} 4s infinite;
`;

export const BuildBoxHeader = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
  line-height: 35px;
  height: 35px;
  border-radius: 5px;
  background-color: #555;
  z-index: 2;
  position: absolute;
  color: white;
  ${secondaryFont}
  top: 7.5px;
`;

export const ArrowLineContainer = styled.div`
  width: 3px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 35px;
  left: 50%;

  @media ${device.tablet} {
    width: 760px;
    height: 3px;
    flex-direction: row;
    top: 155px;
    left: 0;
  }

  @media ${device.laptop} {
    width: 960px;
    height: 4px;
  }

  @media ${device.desktop} {
    width: 1200px;
    height: 5px;
  }
`;

export const ArrawLineWrapper = styled.div`
  width: 3px;
  height: 7.5%;
  overflow: hidden;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 10%;
    height: 5px;
    padding: 0 -20px;
  }
`;

export const ArrowLine = styled.div`
  width: 100%;
  height: 115%;
  background-position: right;
  background-size: 3px 20px;
  margin-top: -20px;
  background-repeat: repeat-y;
  background-image: linear-gradient(#62DAFB 50%, rgba(255,255,255,0) 0%);
  animation: ${dashLineVertiAnimation} 0.3s linear infinite;

  @media ${device.tablet} {
    width: 115%;
    height: 100%;
    animation: ${dashLineHorizAnimation} 0.3s linear infinite;
    margin-top: 0;
    margin-left: -20px;
    background-size: 20px 5px;
    background-repeat: repeat-x;
    background-image: linear-gradient(to right, #62DAFB 50%, rgba(255,255,255,0) 0%);
  }

`;
