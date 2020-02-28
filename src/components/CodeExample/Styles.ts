import styled from 'styled-components';
import { secondaryFont, noSelect } from '../../styles/Mixins';
import { device } from '../../styles/Device';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  border-radius: 10px;
  background-color: #1f2e3f;
  display: grid;
  grid-template-rows: auto auto;
  overflow: hidden;
  margin-top: 50px;

  @media ${device.tablet} {
    grid-template-columns: 260px auto;
    grid-template-rows: none;
  }
`;

export const SideMenu = styled.div`
  width: 100%;
  height: 100%;
  background-color: #263851;
  padding: 25px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  @media ${device.tablet} {
    min-width: 120px;
  }

  @media ${device.laptop} {
    min-width: 180px;
  }

  @media ${device.desktop} {
    min-width: 260px;
  }
`;

export const TopDots = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > span {
    width: 12px;
    height: 12px;
    background-color: hsla(0, 0%, 100%, 0.2);
    border-radius: 50%;
    margin: 0 4px;
  }
`;

export const MenuItem = styled.div`
  ${noSelect}
  color: #fff;
  line-height: 1.2;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin: 0 8px 8px 0;
  background-color: ${(props) => props.theme.active ? '#336da9' : 'transparent'};
  ${secondaryFont}
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.active ? '#336da9' : '#354860'};
  }
`;

export const Content = styled.div`
  overflow: hidden;
`;

export const ContentSection = styled.div`
  width: 200%;
  height: 100%;
  overflow-x: auto;
  display: flex;
`;
