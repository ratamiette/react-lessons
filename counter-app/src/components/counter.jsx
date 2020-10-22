import React, { Component } from "react";

class Counter extends Component {
  // state = {
  /**
   * This piece of code is executed only once when an instance of a counter is created.
   * If this value changes after this - e.g: Clicking on Reset button of your parent, this value won't be updated, because we haven't a single source of truth
   * This kind of component is referred as a Controlled Component, doesn't have it's own state, it receives all the data via props and raise events
   * whenever data needs to be changed. So it's component is entirely controlled by it's parent.
   */
  // value: this.props.counter.value
  // };

  // constructor() {
  //     super();
  //     // That's a way to make the "this" into the handleIncrement method refer our component - else, undefined will be returned
  //     // The current solution we'll use to fix this is convert the handleIncrement to an arrow function (arrow functions does not rebind the "this")
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  /**
   * The componentWillUnmount method is called just before a component is removed from the DOM.
   * It gives us an opportunity to do any kind of cleanup, otherwise we will end up with memory. (e.g: if we have set up timers, listeners, etc)
   */
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    /**
     * return <h1>Hello again</h1><button>Increment</button>;
     * The line above will throw a Parsing error: "The JSX elements must be wrapped in an enclosing tag" due to the render method must return a single el
     * To fix this, we can wrap these 2 elements into a React.Fragment - it will avoid add extra tags to wrap these elements, like a div
     */
    // console.log(this.props);
    console.log("Counter - Rendered");

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm fa fa-plus"
          ></button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2 fa fa-minus"
            disabled={counter.value === 0 ? "disabled" : ""}
          ></button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // Converted to arrow function - by this way the "this" will refer that object, otherwise will be undefined
  // It must be handled by your parent component once this component have not your own local state anymore
  // handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  // }
}

export default Counter;
