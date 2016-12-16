import React from 'react';
import ReactDOM from 'react-dom';

import HelloReact from './component'

window.onload = function () {
  ReactDOM.render(<HelloReact />, document.getElementById('content'));
}