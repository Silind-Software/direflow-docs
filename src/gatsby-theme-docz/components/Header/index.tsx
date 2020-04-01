import React, { FC } from 'react';
import { Link } from '@reach/router';
import {
  HeaderContainer,
  Logo,
  IconContainer,
  TwitterIcon,
  GitHubIcon,
  SlackIcon,
} from './Styles';

const DoczHeader: FC = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo /> <div>Direflow</div>
      </Link>
      <IconContainer>
        <GitHubIcon href='https://github.com/Silind-Software/direflow' target='_blank' />
        <TwitterIcon href='https://twitter.com/direflowjs' target='_blank' />
        <SlackIcon
          href='https://join.slack.com/t/direflow/shared_invite/enQtOTAzMTA4ODgzNTM4LTQ0M2E5YWM1MTdjN2NlMjQ0MzNjMzVkNWRmNjhkOWQ0ZDVhMjc4YzdhN2JjMjNiMThkMjgzY2ZiYjIzMTM2YjM'
          target='_blank'
        />
      </IconContainer>
    </HeaderContainer>
  );
};

export { DoczHeader as Header };
