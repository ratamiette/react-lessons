import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/Login";

class App extends Component {
  handleLoggedIn = (username) => {
    // This is the method that is responsible for updating the state.
    const user = {
      name: "Test",
    };
    this.setState({ currentUser: user });
  };

  state = {
    currentUser: {
      name: null,
    },
  };
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn, // passing this method down using our context object, any components in our component three can call this method
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
