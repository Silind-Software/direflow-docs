import React, { FC } from 'react';
import { HeaderContainer, Logo, BadgeContainer } from './Styles';
import { Link } from '@reach/router';

const DoczHeader: FC = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo /> <div>Direflow</div>
      </Link>
      <BadgeContainer>
        <img src='https://img.shields.io/npm/v/direflow-cli' />
        <img src='https://img.shields.io/github/license/Silind-Software/direflow' />
        <img src='https://github.com/Silind-Software/direflow/workflows/build/badge.svg' />
        <img src='https://img.shields.io/codecov/c/github/Silind-Software/direflow' />
      </BadgeContainer>
    </HeaderContainer>
  );
};

export { DoczHeader as Header };
