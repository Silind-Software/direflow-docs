import styled from 'styled-components';
import { center, logoFont, mainWidth } from '../../../styles/Mixins';
import { device } from '../../../styles/Device';
import logo from '../../../images/logo.svg';
import githubIcon from '../../../images/github.svg';
import twitterIcon from '../../../images/twitter.svg';
import slackIcon from '../../../images/slack.svg';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: white;
  color: #4B6A97;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;

  & > a {
    font-size: 18px;
    font-weight: 300;
    padding-left: 10px;
    display: flex;
    align-items: center;
    ${logoFont}

    @media ${device.tablet} {
      font-size: 22px;
    }

    @media ${device.laptop} {
      font-size: 26px;
    }

    @media ${device.desktop} {
      font-size: 32px;
    }

    & > * {
      margin: 0 10px;
    }
  }
`;

export const Logo = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${logo});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  @media ${device.laptop} {
    width: 28px;
    height: 28px;
  }

  @media ${device.desktop} {
    width: 35px;
    height: 35px;
  }
`;

export const IconContainer = styled.div`
  ${center}
  padding: 0 10px;
`;

export const Icon = styled.a`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  color: #4B6A97;
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  &:hover {
    opacity: 1;
  }
`;

export const TwitterIcon = styled(Icon)`
  background-image: url(${twitterIcon});
`;

export const GitHubIcon = styled(Icon)`
  background-image: url(${githubIcon});
`;

export const SlackIcon = styled(Icon)`
  background-image: url(${slackIcon});
`;
