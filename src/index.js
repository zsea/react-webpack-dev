import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return <div>Hello React!</div>
  }
}

window.onload = function () {
  ReactDOM.render(<HelloReact />, document.getElementById('content'));
}