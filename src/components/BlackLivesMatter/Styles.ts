import styled from 'styled-components';
import { center, mainFont } from '../../styles/Mixins';
import { device } from '../../styles/Device';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;
  font-size: 12px;
  ${center}
  ${mainFont}
  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.laptop} {
    font-size: 16px;
  }

  @media ${device.desktop} {
    font-size: 18px;
  }

  & > a {
    color: #5681C2;
    margin-left: 5px;
  }
`;
