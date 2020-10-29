import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  // username = React.createRef(); // create a reference to use in the input field. e.g:
  // <input ref={this.username} />
  // get a reference of the element in the DOM: const username = this.username.current.value;
  state = {
    account: {
      username: "",
      password: "",
    },
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    // it will prevent full page reload
    e.preventDefault();

    console.log("Submited");
  };
}

export default LoginForm;
