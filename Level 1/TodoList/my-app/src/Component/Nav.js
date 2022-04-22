import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="item-nav">
          <Link to="/"> Todo List</Link>
        </div>
        <div className="item-nav">
          <Link to="/login"> Login</Link>
        </div>
      </div>
    );
  }
}
