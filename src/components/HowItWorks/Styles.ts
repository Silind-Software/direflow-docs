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
    height: 100%;
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
  margin-top: 25px;
`;

export const Headline = styled.div`
  font-size: 28px;
  color: #333;
  ${secondaryFont}
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

export const IllustrationWrapper = styled.div`
  position: relative;
`;

export const IllustrationContainer = styled.div`
  width: 75vw;
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
  margin: 25px 0;

  @media ${device.tablet} {
    margin-top: 0;
    height: 300px;
  }
`;

export const IllustrationContent = styled.div`
  width: 100%;
  min-height: 150px;
  ${center};
  flex-direction: column;
  position: relative;

  @media ${device.tablet} {
    min-height: 250px;
  }
`;

export const IllustrationHeadline = styled.div`
  color: #4B6A97;
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

export const IconHolder = styled.div`
  width: 50%;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 2.3px 1.9px, rgba(0, 0, 0, 0.03) 0px 5.4px 4.3px,
    rgba(0, 0, 0, 0.035) 0px 9.7px 7.7px, rgba(0, 0, 0, 0.043) 0px 16.1px 12.8px,
    rgba(0, 0, 0, 0.05) 0px 26.5px 21.2px, rgba(0, 0, 0, 0.06) 0px 46.2px 37px,
    rgba(0, 0, 0, 0.08) 0px 100px 80px;
`;

export const Icon = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
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
  height: 150px;
  position: absolute;
  background-color: white;
  ${center};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 2.3px 1.9px, rgba(0, 0, 0, 0.03) 0px 5.4px 4.3px,
    rgba(0, 0, 0, 0.035) 0px 9.7px 7.7px, rgba(0, 0, 0, 0.043) 0px 16.1px 12.8px,
    rgba(0, 0, 0, 0.05) 0px 26.5px 21.2px, rgba(0, 0, 0, 0.06) 0px 46.2px 37px,
    rgba(0, 0, 0, 0.08) 0px 100px 80px;

  @media ${device.tablet} {
    height: 200px;
  }
`;

export const BuildBoxImage = styled.div`
  width: 100%;
  height: 80%;
  background-image: url(${logo});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 5%;
`;

export const BuildBoxText = styled.div`
  ${mainFont}
  width: 100%;
  height: 15%;
  position: absolute;
  bottom: 0;
  ${center}
  color: #4B6A97;
  font-size: 11px;

  @media ${device.tablet} {
    font-size: 12px;
  }

  @media ${device.laptop} {
    font-size: 13px;
  }

  @media ${device.desktop} {
    font-size: 14px;
  }

  & > a {
    transition: 0.3s;
    color: #4b6a97;
  }

  & > a:hover {
    color: #1869db;
  }
`;

export const BuildBoxBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #b7d1ff;
  position: absolute;
  animation: ${fillColorAnimation} 4s infinite;
`;

export const BuildBoxHeader = styled.div`
  padding: 0 10px;
  line-height: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: #555;
  z-index: 2;
  position: absolute;
  color: white;
  ${secondaryFont}
  top: -12.5px;

  @media ${device.tablet} {
    top: 7.5px;
    height: 35px;
    line-height: 35px;
  }
`;

export const ArrowLineContainer = styled.div`
  width: 3px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
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

export const ArrowLineWrapper = styled.div`
  width: 3px;
  height: 30%;
  overflow: hidden;

  @media ${device.tablet} {
    width: 30%;
    height: 5px;
    padding: 0 -20px;
  }
`;

export const ArrowLine = styled.div`
  width: 100%;
  height: 200%;
  background-position: right;
  background-size: 3px 10px;
  margin-top: -10px;
  background-repeat: repeat-y;
  background-image: linear-gradient(#ccd7e8 50%, rgba(255, 255, 255, 0) 0%);
  animation: ${dashLineVertiAnimation} 0.6s linear infinite;

  @media ${device.tablet} {
    width: 115%;
    height: 100%;
    animation: ${dashLineHorizAnimation} 0.3s linear infinite;
    margin-top: 0;
    margin-left: -20px;
    background-size: 20px 5px;
    background-repeat: repeat-x;
    background-image: linear-gradient(to right, #ccd7e8 50%, rgba(255, 255, 255, 0) 0%);
  }
`;
