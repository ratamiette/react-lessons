import React, { Component } from "react";

class LoginForm extends Component {
  //   username = React.createRef(); // create a reference to use in the input field

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              //   ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }

  handleSubmit = (e) => {
    // it will prevent full page reload
    e.preventDefault();

    // get a reference of the element in the DOM
    // const username = this.username.current.value;

    console.log("Submited");
  };
}

export default LoginForm;
