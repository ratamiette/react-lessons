import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

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

  doSubmit = () => {
    // Call the server to persist data
    console.log("Submited");
  };
}

export default LoginForm;
