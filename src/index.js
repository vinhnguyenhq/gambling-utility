import React from "react";
import ReactDOM from "react-dom";

import ons from "onsenui";
import { Button } from "react-onsenui";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Hello {this.props.name}</h1>
          <Button>OnsenUI</Button>
        </div>
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);
