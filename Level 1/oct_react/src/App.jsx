import React from "react";
import "./App.css";
import ClComponent from "./Components/ClassComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checkFlag: true };
  }
  state = { stateChange: "props.stateChange" }

  hideClassComponent = () => {
    this.setState({ checkFlag: !this.state.checkFlag });
  }
  render() {
    return (
      <div className="App">
        {this.state.checkFlag ? <ClComponent stateChange={this.state.stateChange} /> : null}
        <button type="button" className="btn-component__hide" onClick={this.hideClassComponent}>Ẩn Class Component props</button>
      </div>
    );
  }
}
export default App;
