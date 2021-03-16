import React from "react";
import "./Input.css";

class Input extends React.Component {
  render() {
    return <div className="Input">{this.props.children}</div>;
  }
}

export default Input;
