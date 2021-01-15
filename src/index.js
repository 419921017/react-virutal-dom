// import React from 'react';
// import ReactDOM from 'react-dom';

import React from './lib/react'
import ReactDOM from './lib/react-dom'

let element = React.createElement('h1', {
  className: 'title',
  style: {
    color: 'red',
    fontSize: '50px',
  },
}, 'hello world');

console.log('element', element)

ReactDOM.render(element, document.getElementById('root'));

console.log()
