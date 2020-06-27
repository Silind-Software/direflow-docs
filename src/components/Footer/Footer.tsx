import React, { FC } from 'react';
import { FooterContainer, FooterContent, TextContent, BottomLine, FooterButton } from './Styles';
import { Link } from '@reach/router';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TextContent>
          <b>Your help is wanted!</b>
          <br />
          <span>If you find a bug or have a nice idea or a suggestion:</span>
          <span>Please create an issue on Direflow's GitHub page.</span>
          <br />
          <span>If you have improved Direflow in any way, please create a Pull Request.</span>
          <span>It is greatly appreciated 💜</span>
          <br />
          <span>Please let us know if you build something cool with Direflow!</span>
          <span>It would be awesome to showcase it on our webpage 🤙</span>
        </TextContent>
        <Link to='/contributing'>
          <FooterButton>Contribute</FooterButton>
        </Link>
      </FooterContent>
      <BottomLine>
        <span>Direflow &copy; {new Date().getFullYear()}</span>
      </BottomLine>
    </FooterContainer>
  );
};

export default Footer;
