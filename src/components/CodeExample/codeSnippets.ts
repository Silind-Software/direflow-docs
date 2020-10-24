export const codeSnippets = [
  {
    menuName: 'Configure component',
    language: 'javascript',
    snippet: `import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

DireflowComponent.create({

  // React component to use
  component: App,

  // Configuration - tagname of the custom element
  configuration: {
    tagname: 'crypto-cart',
  }
});`,
  },
  {
    menuName: 'Use as native HTML',
    language: 'html',
    snippet: `<head>
  // Import bundles
  <script src='https://direflow.io/crypto-widgets.js' />
  <script src='https://direflow.io/ui-library.js' />
</head>

<body>
  // Use directly in browser
  <crypto-cart />
  <crypto-items />

  <custom-slider />

  // Add attributes
  <custom-button text="Click me" type="primary" size="small" />
  <custom-button text="Click me" type="success" />
</body>`,
  },
  {
    menuName: 'Setting properties',
    language: 'javascript',
    snippet: `// Query the element
const cryptoCart = document.querySelector('crypto-cart');

// Update a property
// React will handle the UI update under the hood 😎
const cryptoCart.itemsList = [
  {
    name: 'bitcoin',
    amount: 3,
  },
  {
    name: 'ethereum',
    amount: 2,
  }
];`,
  },
  {
    menuName: 'Dispatching events',
    language: 'jsx',
    snippet: `import React, { useContext } from 'react';
import { EventContext } from 'direflow-component';

const App = () => {
  // Create event dispatcher
  const dispatch = useContext(EventContext);

  const handleClick = () => {
    // Create event
    const event = new Event('my-event');

    // Dispatch event
    dispatch(event);
  }

  return (
    <div onClick={handleClick}>
      Click to dispatch 'my-event'
    </div>
  );
};`,
  },
  {
    menuName: 'Subscribing to events',
    language: 'javascript',
    snippet: `// Query the element
const cryptoItems = document.querySelector('crypto-items');

// Add event listener and subscribe to custom event
cryptoItems.addEventListener('my-event' (e) => {

  // Handle event
});`,
  },
  {
    menuName: 'Customize Webpack',
    language: 'javascript',
    snippet: `/**
 * Webpack configuration for Direflow Component
 * Additional webpack plugins / overrides can be provided here
 */
module.exports = (config, env) => ({

  ...webpackConfig(config, env),
  // Add your own webpack config here
});`,
  },
  {
    menuName: 'Configure Direflow',
    language: 'json',
    snippet: `{
  "build": {
    "componentPath": "direflow-component",
    "filename": "direflowBundle.js",
    "emitSourceMap": true,
    "vendor": true
  },
  "modules": {
    "react": "https://your-custom-cdn.com/react.js",
    "reactDOM": "https://your-custom-cdn.com/react-dom.js"
  },
  "polyfills": {
    "sd": "https://your-custom-cdn.com/webcomponents-sd.js",
    "ce": "https://your-custom-cdn.com/webcomponents-ce.js",
    "adapter": "https://your-custom-cdn.com/webcomponents-ad.js"
  }
}`,
  },
  {
    menuName: 'Access the DOM node',
    language: 'javascript',
    snippet: `import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

// create method returns a promise
const createWebComponent = DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'custom-button',
  }
});

// Access DOM node when it's mounted
createWebComponent.then((element) => {

  // Reference to DOM node
  const currentSize = element.getAttribute('size');
});`,
  },
];
