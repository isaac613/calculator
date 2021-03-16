import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import { evaluate } from "mathjs";

class App extends React.Component {
  state = {
    Input: "",
    previousNumber: "",
    operator: "",
  };

  addToInput = (val) => {
    this.setState({ Input: this.state.Input + val });
  };

  addZeroToInput = (val) => {
    // Will not add zero at the begining of any calculation
    if (this.state.Input !== "") {
      this.setState({ Input: this.state.Input + val });
    }
  };

  addDecimal = (val) => {
    // This will stop the decimal being added multiple times in a row
    if (this.state.Input.indexOf(".") === -1) {
      this.setState({ Input: this.state.Input + val });
    }
  };

  clearInput = () => {
    this.setState({ Input: "" });
  };

  add = () => {
    this.state.previousNumber = this.state.Input;
    this.setState({ Input: "" });
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.Input;
    this.setState({ Input: "" });
    this.state.operator = "subtract";
  };

  divide = () => {
    this.state.previousNumber = this.state.Input;
    this.setState({ Input: "" });
    this.state.operator = "divide";
  };

  multiply = () => {
    this.state.previousNumber = this.state.Input;
    this.setState({ Input: "" });
    this.state.operator = "multiply";
  };

  handleEqual = () => {
    this.setState({ input: evaluate(this.state.Input) });

    if (this.state.operator == "plus") {
      this.setState({
        Input: parseInt(this.state.previousNumber) + parseInt(this.state.Input),
      });
    } else if (this.state.operator == "subtract") {
      this.setState({
        Input: parseInt(this.state.previousNumber) - parseInt(this.state.Input),
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        Input: parseInt(this.state.previousNumber) / parseInt(this.state.Input),
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        Input: parseInt(this.state.previousNumber) * parseInt(this.state.Input),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.Input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>%</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
