import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  // first way to provide access to the context outside of the render method
  static contextType = UserContext;

  componentDidMount() {
    console.log("componentDidMount context:", this.context);
  }

  render() {
    return (
      // The Consumer component expects a function as its child
      <UserContext.Consumer>
        {(currentUser) => <div>Movie List - {currentUser.name}</div>}
      </UserContext.Consumer>
    );
  }
}

// second way to provide access to the context outside of the render method
// MovieList.contextType = UserContext;

export default MovieList;
