import styled from 'styled-components';
import { center, mainFont, secondaryFont } from '../../styles/Mixins';
import { Button, SecondaryButton } from '../Jumbotron/Styles';
import { device } from '../../styles/Device';

export const FooterContainer = styled.div`
  width: 100%;
  background-color: white;
  border-top: 1px solid #e3e7f7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterContent = styled.div`
  ${center};
  flex-direction: column;
  margin-top: 25px;
`;

export const TextContent = styled.div`
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mainFont}
  color: #333;
  padding: 0 25px;
  box-sizing: border-box;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.laptop} {
    font-size: 18px;
  }

  @media ${device.desktop} {
    font-size: 20px;
  }

  & b {
    font-size: 24px;
  }
`;

export const BottomLine = styled.div`
  width: 100%;
  height: 35px;
  line-height: 35px;
  background-color: white;
  border-top: 1px solid #e3e7f7;
  text-align: center;
  ${secondaryFont}
  color: #888;
  transition: 0.3s;
  margin-top: 25px;

  &:hover {
    color: #38559e;
  }
`;

export const FooterButton = styled(SecondaryButton)`
  margin-top: 25px;
`;
