import styled from 'styled-components';
import { center, mainFont } from './Mixins';
import { device, size } from './Device';

export const FullSection = styled.div`
  width: 100%;
  background-color: ${(props) => props.color};
  ${center}
`;

export const Section = styled.div`
  width: 100%;
  ${center}
  flex-direction: column;
  padding: 10px;

  @media ${device.tablet} {
    width: 768px;
    padding: 30px;
  }

  @media ${device.laptop} {
    width: 1024px;
    padding: 40px;
  }

  @media ${device.desktop} {
    width: 1920px;
    padding: 50px;
  }
`;

export const Space = styled.div`
  height: ${(props) => props.theme.height}px;
`;

export const SubText = styled.div`
  font-size: 14px;
  color: #333;
  ${mainFont}
  text-align: center;
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
