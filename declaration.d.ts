declare module '*.png' {
  const value: any;
  export default value;
}

declare namespace JSX {
  interface IntrinsicElements {
    'crypto-cart',
    'crypto-items',
    'custom-button',
    'custom-radio',
    'custom-checkbox',
    'custom-slider'
  }
}
