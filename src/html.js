import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>Direflow</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script src="https://silind-s3.s3.eu-west-2.amazonaws.com/direflow/base-component.js"></script>

        <meta property='og:type' content='”website”' />
        <meta property='og:site_name' content='Direflow'/>
        <meta property='og:url' content='https://direflow.io/' />
        <meta
          property='og:image'
          content='https://silind-s3.s3.eu-west-2.amazonaws.com/direflow/og-image.png'
        />
        <meta property='og:description' content='Create Web Components using React' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@silindsoftware' />
        <meta name='twitter:creator' content='@silindsoftware' />
        <meta name='twitter:title' content='Direflow' />
        <meta name='twitter:description' content='Create Web Components using React' />
        <meta
          name='twitter:image'
          content='https://silind-s3.s3.eu-west-2.amazonaws.com/direflow/og-image.png'
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
