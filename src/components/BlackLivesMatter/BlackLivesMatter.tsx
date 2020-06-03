import React, { FC } from 'react';
import { Container } from './Styles';

const BlackLivesMatter: FC = () => {
  return (
    <Container>
      <span>Black Lives Matter.</span>
      <a
        target='_blank'
        rel='noreferrer'
        href='https://support.eji.org/give/153413/#!/donation/checkout'
      >
        Support the Equal Justice Initiative.
      </a>
    </Container>
  );
};

export default BlackLivesMatter;
