// import React from 'react';
// import ReactDOM from 'react-dom';

import React from "./lib/react";
import ReactDOM from "./lib/react-dom";

// let element = React.createElement('h1', {
//   className: 'title',
//   style: {
//     color: 'red',
//     fontSize: '50px',
//   },
// }, 'hello world');

// function Welcome(props) {
//   return <h1>hello {props.name}</h1>
// }

class Welcome extends React.Component {
  render() {
    return React.createElement("h1", { id: "welcome" }, this.props.name);
  }
}

// let element = React.createElement(Welcome, { id: "welcome", name: "wang" });
let element = React.createElement(Welcome, { name: "wang" });

ReactDOM.render(element, document.getElementById("root"));
