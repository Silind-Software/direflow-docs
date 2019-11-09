import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
  title?: string;
}

const AppHeader: FC<IProps> = (props) => {
  const title = props.title || 'Direflow';

  return (
    <Helmet>
      <meta charSet='utf-8' />

      <meta property='og:type' content='”website”' />
      <meta property='og:site_name' content='Direflow' />
      <meta property='og:url' content='https://direflow.io/' />
      <meta
        property='og:image'
        content='https://silind-s3.s3.eu-west-2.amazonaws.com/create-react-web-component-demo/og-image.png'
      />
      <meta property='og:description' content='Direflow' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@silindsoftware' />
      <meta name='twitter:creator' content='@silindsoftware' />
      <meta name='twitter:title' content='Direflow' />
      <meta name='twitter:description' content='Official documentation for Direflow' />
      <meta
        name='twitter:image'
        content='https://silind-s3.s3.eu-west-2.amazonaws.com/create-react-web-component-demo/og-image.png'
      />

      <title>{title}</title>
    </Helmet>
  );
};

export default AppHeader;
