import styled from 'styled-components';
import { center, mainWidth } from '../../styles/Mixins';
import { device } from '../../styles/Device';

export const Container = styled.div`
  ${mainWidth}
  ${center}
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const Column = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
  ${center}
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px 0;

  @media ${device.tablet} {
    width: 50%;
  }
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
    margin-bottom: 20px;
  }

  & > crypto-items {
    width: 90%;
    max-width: 600px;
    margin-top: 20px;
  }

  & > * {
    margin: 15px 0;
  }
`;

export const PickerExamples = styled.div`
  ${center};
  flex-direction: column;
  & > * {
    margin: 5px 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    & > * {
      margin: 0 25px;
    }
  }
`;
