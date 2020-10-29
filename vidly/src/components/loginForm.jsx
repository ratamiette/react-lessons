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
    errors: {},
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            error={errors.password}
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
    this.setState({ account, errors });
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    // it will prevent full page reload
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });

    if (errors) return null;

    // Call the server to persist data
    console.log("Submited");
  };
}

export default LoginForm;
