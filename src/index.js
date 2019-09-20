import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

Array.prototype.getLength = function() {
  let i = 0;
  while (this[i] !== undefined) {
    i++;
  }
  return i;
};

class LengthClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      inputArray: []
    };
  }

  onEnterPressed = event => {
    if (event.key === "Enter") {
      const initialArrays = this.state.inputArray;
      initialArrays.push(this.state.inputVal);
      this.setState({
        inputArray: initialArrays,
        inputVal: ""
      });
      console.log("event get", this.state.inputArray);
    }
  };

  onFieldChange = event => {
    this.setState({ inputVal: event.target.value });
  };

  render() {
    return (
      <div>
        <label>enter value and press enter to push in list</label>
        <input
          name="arrayField"
          onChange={this.onFieldChange}
          value={this.state.inputVal}
          placeholder="Text/Number"
          onKeyPress={this.onEnterPressed}
        />
        <button
          onClick={() =>
            this.setState({ arrayLength: this.state.inputArray.getLength() })
          }
        >
          Check Length
        </button>
        <div>Length of array is : {this.state.arrayLength}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<LengthClass />, rootElement);
