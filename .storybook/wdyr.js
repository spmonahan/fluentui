import React from 'react';

console.log('ROOTROOTROOTROOTROOTROOTROOTROOTROOT');
if (process.env.NODE_ENV === 'development') {
  console.log('WHY DID YOU RENDER?');
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}
