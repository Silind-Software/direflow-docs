import styled from 'styled-components';
import { center } from './Mixins';
import { device } from './Device';

export const Section = styled.div`
  ${center}
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  margin: 25px 0;

  @media ${device.tablet} {
    padding: 30px;
  }

  @media ${device.laptop} {
    padding: 40px;
  }

  @media ${device.desktop} {
    padding: 50px;
  }
`;

export const Space = styled.div`
  height: ${(props) => props.theme.height}px;
`;
