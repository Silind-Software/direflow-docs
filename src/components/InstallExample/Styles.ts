import styled from 'styled-components';
import { codeFont, center, noSelect } from '../../styles/Mixins';
import { device } from '../../styles/Device';

export const Container = styled.div`
  width: 90%;
  margin: 25px 0;

  @media ${device.tablet} {
    width: 600px;
  }

  @media ${device.laptop} {
    width: 620px;
  }

  @media ${device.desktop} {
    width: 640px;
  }
`;

export const CodeBlock = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px 12px;
  margin: 12px 0;
  background-color: #1F2E3F;
  color: rgb(169, 183, 198);
  ${codeFont}
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  transition: 0.3s;

  @media ${device.tablet} {
    padding: 10px 16px;
    margin: 16px 0;
    font-size: 14px;
  }

  @media ${device.laptop} {
    padding: 12px 18px;
    margin: 18px 0;
    font-size: 16px;
  }

  @media ${device.desktop} {
    padding: 15px 20px;
    margin: 20px 0;
    font-size: 18px;
  }
`;

export const CopyButton = styled.div`
  border-radius: 5px;
  padding: 5px;
  background-color: #1F2E3F;
  color: rgb(169, 183, 198);
  transition: 0.3s;
  cursor: pointer;
  ${center}
  ${noSelect}

  @media ${device.tablet} {
    padding: 6px;
    border-radius: 6px;
  }

  @media ${device.laptop} {
    padding: 8px;
    border-radius: 8px;
  }

  @media ${device.desktop} {
    padding: 10px;
    border-radius: 10px;
  }

  &:hover {
    background-color: #4B6A97;
    color: white;
  }
`;
