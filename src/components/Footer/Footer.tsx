import React, { FC } from 'react';
import { FooterContainer, FooterContent, TextContent, BottomLine, FooterButton } from './Styles';
import { Link } from '@reach/router';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TextContent>
          <b>Want to help?</b>
          <br />
          <span>Pull requests are always more than welcome.</span>
          <span>Got a suggestion or found a bug? - please raise an issue.</span>
        </TextContent>
        <Link to='/contributing'>
          <FooterButton>Contribute</FooterButton>
        </Link>
      </FooterContent>
      <BottomLine>
        <a href='https://silind.com' target='_blank'>
          Silind Software
        </a>
      </BottomLine>
    </FooterContainer>
  );
};

export default Footer;
