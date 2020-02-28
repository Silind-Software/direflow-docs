import styled from 'styled-components';
import { center, secondaryFont, logoFont, mainFont } from '../../styles/Mixins';
import { device } from '../../styles/Device';
import headlineImage from '../../images/headline-image.svg';
import bigLogo from '../../images/logo-big.svg';
import pairLogo from '../../images/logo-pair.svg';

export const JumbotronContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: white;
  border-bottom: 1px solid #e3e7f7;
  flex-direction: column;
  box-shadow: 0 15px 20px #e3e7f7;
  padding: 0 25px;
  position: relative;
  overflow: hidden;
  ${center}

  @media ${device.tablet} {
    height: 400px;
  }

  @media ${device.laptop} {
    height: 450px;
  }

  @media ${device.desktop} {
    height: 500px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  z-index: 2;
  ${center}
`;

export const BottomFadeLine = styled.div`
  width: 100%;
  height: 35%;
  background-image: linear-gradient(rgba(255,255,255,0), rgb(255,255,255, 0.75));
  position: absolute;
  bottom: 0;
`;

export const BigLogo = styled.div`
  width: 600px;
  height: 350px;
  background-image: url(${bigLogo});
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  right: -250px;
  opacity: 0.3;
  bottom: 0;

  @media ${device.tablet} {
    width: 700px;
    right: -250px;
    height: 350px;
    background-size: 75%;
  }

  @media ${device.laptop} {
    right: 0%;
    width: 700px;
    height: 400px;
    background-size: 85%;
  }

  @media ${device.desktop} {
    right: 5%;
    width: 800px;
    height: 500px;
    background-size: 100%;
  }
`;

export const PairLogo = styled.div`
  width: 250px;
  height: 400px;
  background-image: url(${pairLogo});
  background-size: 100%;
  position: absolute;
  opacity: 0.3;
  left: -100px;
  top: 25%;

  @media ${device.tablet} {
    width: 350px;
    height: 400px;
    left: 5%;
    top: 5%;
  }

  @media ${device.laptop} {
    width: 350px;
    height: 400px;
    left: 15%;
    top: 5%;
  }
`;

export const Headline = styled.div`
  ${logoFont}
  font-size: 28px;
  font-weight: 100;
  color: #4B6A97;
  text-align: center;

  @media ${device.tablet} {
    font-size: 48px;
  }

  @media ${device.laptop} {
    font-size: 62px;
  }

  @media ${device.desktop} {
    font-size: 120px;
  }
`;

export const HeadlineImage = styled.div`
  width: 100%;
  height: 75px;
  background-image: url(${headlineImage});
  background-position: center;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    width: 750px;
    height: 100px;
  }

  @media ${device.laptop} {
    width: 800px;
    height: 120px;
  }

  @media ${device.desktop} {
    width: 1024px;
    height: 160px;
  }
`;

export const Subtext = styled.div`
  ${secondaryFont}
  font-size: 18px;
  margin-top: 25px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 22px;
  }

  @media ${device.laptop} {
    font-size: 24px;
  }

  @media ${device.desktop} {
    font-size: 28px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 75px;
  align-items: center;
  & > * {
    margin: 0 5px;
  }
`;

export const Button = styled.div`
  display: inline-block;
  border-radius: 4px;
  color: white;
  background-color: #4B6A97;
  border: 1px solid #4B6A97;
  ${secondaryFont}
  font-size: 12px;
  padding: 15px 20px;
  transition: 0.3s;
  cursor: pointer;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 20px;
  }

  @media ${device.desktop} {
    font-size: 22px;
  }

  &:hover {
    background-color: #5781C2;
    border: 1px solid #5781C2;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: #4B6A97;
  padding: 15px 20px;

  &:hover {
    color: white;
  }
`;

export const Highligt = styled.span`
  font-weight: bold;
  color: #4B6A97;
`;

export const SmallText = styled.div`
  margin-top: 18px;
  font-size: 12px;
  ${mainFont}

  & > a {
    transition: 0.3s;
    color: #4B6A97;
  }

  & > a:hover {
    color: #1869db;
  }

  @media ${device.tablet} {
    font-size: 14px;
    margin-top: 20px;
  }

  @media ${device.laptop} {
    font-size: 15px;
    margin-top: 22px;
  }

  @media ${device.desktop} {
    font-size: 16px;
    margin-top: 25px;
  }
`;
