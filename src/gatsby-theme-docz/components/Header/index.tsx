import React, { FC } from 'react';
import { HeaderContainer, Logo, IconContainer, TwitterIcon, GitHubIcon } from './Styles';
import { Link } from '@reach/router';

const DoczHeader: FC = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo /> <div>Direflow</div>
      </Link>
      <IconContainer>
        <GitHubIcon href='https://github.com/Silind-Software/direflow' target='_blank' />
        <TwitterIcon href='https://twitter.com/silindsoftware' target='_blank' />
      </IconContainer>
    </HeaderContainer>
  );
};

export { DoczHeader as Header };
