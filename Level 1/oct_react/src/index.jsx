import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import reportWebVitals from "./reportWebVitals";

class Hello extends React.Component {
  render() {
    return <p className="text">Xin chào ReactJs, hiển thị HTML sử dụng Class Component</p>;
  }
}
function Hello2() {
  return <p className="text">Xin chào ReactJs, hiển thị HTML sử dụng Function Component</p>;
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Hello2 />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
