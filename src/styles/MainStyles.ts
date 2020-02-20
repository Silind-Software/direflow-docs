import styled from 'styled-components';
import { center } from './Mixins';
import { device } from './Device';

export const Section = styled.div`
  width: 100%;
  ${center}
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  margin: 25px auto;

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
