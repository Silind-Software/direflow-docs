import styled from 'styled-components';
import { center } from '../../styles/Mixins';
import { device } from '../../styles/Device';

export const Container = styled.div`
  width: 100%;
  ${center}
  flex-wrap: wrap;

  @media ${device.tablet} {
    width: 768px;
    height: 550px;
  }

  @media ${device.laptop} {
    width: 1024px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }
`;

export const Column = styled.div`
  width: 50%;
  min-width: 375px;
  height: 100%;
  ${center}
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px 0;
`;

export const ExampleContainer = styled.div`
  width: 100%;
  height: 100%;
  ${center}
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;

  & > crypto-cart {
    width: 90%;
    max-width: 600px;
    margin-bottom: 10px;
  }

  & > crypto-items {
    width: 90%;
    max-width: 600px;
    margin-top: 10px;
  }

  & > custom-button {
    margin: 10px 0;
  }
`;
