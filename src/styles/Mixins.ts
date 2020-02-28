import { device } from './Device';

export const center = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const noSelect = `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const canSelect = `
  -webkit-touch-callout: unset;
  -webkit-user-select: unset;
  -khtml-user-select: unset;
  -moz-user-select: unset;
  -ms-user-select: unset;
  user-select: unset;
`;

export const logoFont = `
  font-family: 'Advent Pro', sans-serif;
`;

export const mainFont = `
  font-family: 'Arimo', sans-serif;
`;

export const secondaryFont = `
  font-family: 'Muli', sans-serif;
`;

export const codeFont = `
  font-family: 'Fira Code', monospace;
`;

export const mainWidth = `
  width: 100%;

  @media ${device.tablet} {
    width: 768px;
  }

  @media ${device.laptop} {
    width: 1024px;
  }

  @media ${device.desktop} {
    width: 1440px;
  }
`;
