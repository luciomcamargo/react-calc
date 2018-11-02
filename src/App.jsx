import React, { Component } from "react";
import "./App.css";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "0"
    };
  }

  addToInput = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input + val });
    } else if (!this.state.input.match(/^0+/) && isNaN(val)) {
      this.setState({ input: this.state.input + val });
    } else {
      this.setState({ input: this.state.input.replace(/^0+/, "") + val });
    }
    console.log(this.state.input);
  };

  handleX = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input.replace(/(\+|\-|\*|\/)$/, "*") });
    } else {
      this.setState({ input: this.state.input + "*" });
    }
  };
  handleAdd = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input.replace(/(\+|\-|\*|\/)$/, "+") });
    } else {
      this.setState({ input: this.state.input + "+" });
    }
  };
  handleSubtract = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({ input: this.state.input.replace(/(\+|\-|\*|\/)$/, "-") });
    } else {
      this.setState({ input: this.state.input + "-" });
    }
  };
  handleDivide = val => {
    if (isNaN(val) && isNaN(this.state.input[this.state.input.length - 1])) {
      this.setState({
        input: this.state.input.replace(/(\+|\-|\*|\/)$/, "/")
      });
    } else {
      this.setState({ input: this.state.input + "/" });
    }
  };
  handleEqual = () => {
    let result = math.eval(this.state.input);

    this.setState({ input: result.toString() });
    console.log(typeof this.state.input);
  };
  handleDecimal = () => {
    if (math.eval(this.state.input + ".1")) {
      this.setState({ input: this.state.input + "." });
    } else if (!math.eval(this.state.input + ".1")) {
      this.setState({ input: this.state.input });
    }
  };
  handleZero = () => {
    var match2 = this.state.input.match(/^0/);
    var match3 = this.state.input.match(/\+0|\-0|\*0|\/0/);
    if (match2) {
      this.setState({ input: this.state.input });
    } else if (match3) {
      this.setState({ input: this.state.input });
    } else {
      this.setState({ input: this.state.input + "0" });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div id="display" className="cal_result">
            {this.state.input}
          </div>
          <div className="board">
            <buttons
              id="clear"
              className="button is_clear"
              onClick={() => this.setState({ input: "0" })}
            >
              C
            </buttons>
            <buttons
              id="divide"
              className="button"
              onClick={() => this.handleDivide("/")}
            >
              /
            </buttons>
            <buttons
              id="one"
              className="button"
              onClick={() => this.addToInput(1)}
            >
              1
            </buttons>
            <buttons
              id="two"
              className="button"
              onClick={() => this.addToInput(2)}
            >
              2
            </buttons>
            <buttons
              id="three"
              className="button"
              onClick={() => this.addToInput(3)}
            >
              3
            </buttons>
            <buttons
              id="multiply"
              className="button"
              onClick={() => this.handleX("*")}
            >
              X
            </buttons>
            <buttons
              id="four"
              className="button"
              onClick={() => this.addToInput(4)}
            >
              4
            </buttons>
            <buttons
              id="five"
              className="button"
              onClick={() => this.addToInput(5)}
            >
              5
            </buttons>
            <buttons
              id="six"
              className="button"
              onClick={() => this.addToInput(6)}
            >
              6
            </buttons>
            <buttons
              id="add"
              className="button"
              onClick={() => this.handleAdd("+")}
            >
              +
            </buttons>
            <buttons
              id="seven"
              className="button"
              onClick={() => this.addToInput(7)}
            >
              7
            </buttons>
            <buttons
              id="eight"
              className="button"
              onClick={() => this.addToInput(8)}
            >
              8
            </buttons>
            <buttons
              id="nine"
              className="button"
              onClick={() => this.addToInput(9)}
            >
              9
            </buttons>
            <buttons
              id="subtract"
              className="button"
              onClick={() => this.handleSubtract("-")}
            >
              -
            </buttons>
            <buttons
              id="zero"
              className="button is_zero"
              onClick={() => this.handleZero(0)}
            >
              0
            </buttons>
            <buttons
              id="decimal"
              className="button"
              onClick={() => this.handleDecimal(".")}
            >
              .
            </buttons>
            <buttons
              id="equals"
              className="button is_equals"
              onClick={() => this.handleEqual()}
            >
              =
            </buttons>
          </div>
        </div>
        <div className="gitlink">
          <a href="https://github.com/luciomcamargo/react-calc">GitHub Repo</a>
        </div>
      </div>
    );
  }
}

export default App;
