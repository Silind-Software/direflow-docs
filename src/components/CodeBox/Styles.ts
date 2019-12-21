import styled from 'styled-components';
import { codeFont, noSelect } from '../../styles/Mixins';
import { device } from '../../styles/Device';
import dots from '../../images/dots.svg';

export const CodeBoxContainer = styled.div`
  width: 100%;
  height: 335px;
  background-color: #151A22;
  border-radius: 8px;
  box-shadow: 6px 8px 20px 5px rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  overflow: hidden;
  ${noSelect}

  @media ${device.tablet} {
    width: 675px;
    height: 400px;
  }

  @media ${device.laptop} {
    width: 750px;
    height: 420px;
  }

  @media ${device.desktop} {
    width: 850px;
    height: 440px;
  }
`;

export const DotLine = styled.div`
  height: 30px;
  display: flex;
  align-items: flex-end;
  padding-left: 15px;
`;

export const Dots = styled.div`
  width: 54px;
  height: 15px;
  background-image: url(${dots});
  background-repeat: no-repeat;
`;

export const CodeContainer = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  padding: 15px;
  box-sizing: border-box;
  background-color: #151A22;
  font-size: 10px;
  ${codeFont}

  @media ${device.tablet} {
    font-size: 13px;
  }

  @media ${device.laptop} {
    font-size: 15px;
  }

  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const CodeLineContainer = styled.div`
  min-height: 20px;
  color: #ccc;
  display: flex;
  align-items: center;
  padding: 2.5px 0;

  & > * {
    display: flex;
    align-items: center;
  }

  & div {
    display: flex;
    flex-wrap: wrap;
  }

  & span {
    color: #8f9b7a;
    margin-right: 10px;
  }

  & code {
    color: #777;
    margin-right: 10px;
    align-self: flex-start;
  }

  & pre {
    color: white;
    font-weight: bold;
    margin: 0;
  }

  & i {
    font-style: normal;
    color: #686f7a;
  }
`;

export const CodeQuestionContainer = styled.div`
  min-height: 20px;
  color: #ccc;
  display: flex;
  padding: 2.5px 0;
  flex-direction: column;

  & > * {
    display: flex;
    align-items: center;
  }

  & * {
    margin: 1px 0;
  }

  & div {
    display: flex;
    flex-wrap: wrap;
  }

  & span {
    color: #8f9b7a;
    margin-right: 10px;
  }

  & code {
    color: #777;
    margin-right: 10px;
    align-self: flex-start;
  }

  & pre {
    display: flex;
    align-items: center;
    color: white;
    font-weight: bold;
    margin: 0;
  }

  & i {
    font-style: normal;
    color: #686f7a;
    margin-left: 10px;
  }

  & s {
    color: #8f9b7a;
    text-decoration: none;
  }
`;

export const CodeBlockContainer = styled.div`
  display: flex;
  align-items: center;

  & p {
    color: #719372;
    white-space: pre-wrap;
  }

  & s {
    color: #a86b88;
    text-decoration: none;
    align-self: flex-end;
  }
`;

export const Cursor = styled.div`
  width: 2px;
  height: 20px;
  background-color: white;
  opacity: 0.8;
  height: 12px;
  display: ${(props) => (props.theme.show ? 'inline-block' : 'none')} !important;

  @media ${device.tablet} {
    height: 16px;
  }

  @media ${device.laptop} {
    height: 18px;
  }

  @media ${device.desktop} {
    height: 20px;
  }
`;
