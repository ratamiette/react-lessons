import React from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import authService from "../services/authService";

class LoginForm extends Form {
  // username = React.createRef(); // create a reference to use in the input field. e.g:
  // <input ref={this.username} />
  // get a reference of the element in the DOM: const username = this.username.current.value;
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  render() {
    if (authService.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await authService.login(data.username, data.password);

      // the window.location below is need to do a full reload, as the componentDidMount in the App is called once - where we are decoding the token to update the state
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = exception.response.data;
        this.setState({ errors });
      }
    }
  };
}

export default LoginForm;
