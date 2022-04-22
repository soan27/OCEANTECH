import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: this.username,
      password: this.password,
    };
    console.log(data);

    axios
      .post("https://60f6ed5fa9c8e3e7c09b44ec.mockapi.com/user/login", data)
      .then((res) => {
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Form Login</h1>
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            className="form-control"
            placeholder="UserName"
            onChange={(e) => (this.username = e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => (this.password = e.target.value)}
          />
        </div>
        <button className="btn-login">Login</button>
      </form>
    );
  }
}
