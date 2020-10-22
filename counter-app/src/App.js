import React, { Component } from "react";
// import './App.css';

import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  /**
   * The constructor method is called once and it's the right place to initialize the properties in this class.
   * Notes: this.props is not accessible here. To works we need to add the props as an argument in the constructor() and in the super() call.
   * e.g: constructor(props) | super(props);
   * In the constructor we set the state directly - The setState() method can only be called when a component is rendered and placed in the DOM.
   */
  constructor() {
    super();
    console.log("App - Constructor");
  }

  /**
   * The componentDidMount method is called after our component is rendered into the DOM. It's the perfect place to make ajax calls, to get data from the server.
   *
   */
  componentDidMount() {
    console.log("App - Mounted");
  }

  /**
   * The render method returns a react element that represents our Virtual DOM. Then React gets that Virtual DOM and render it in the actual browser DOM.
   * Then, our component is mounted.
   * When a component is rendered, all it's children are also rendered recursively, after that, the component is mounted and is in the DOM.
   */
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters]; // cloning the counters array from the state
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // we also need to clone the record we are going to modify - it will avoid change the state directly
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters]; // cloning the counters array from the state
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // we also need to clone the record we are going to modify - it will avoid change the state directly
    counters[index].value--;
    this.setState({ counters });
  };
}

export default App;
