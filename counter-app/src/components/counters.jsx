import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  /**
   * Now the counters component is a controlled component (have not your own local state).
   * We lifted up the state of the counters component to it's parent (App component)
   * Now we can share this state with the children of these components via props and with this tecnique we have multiple components in sync.
   */
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          // The counter component raises these events below and here we are bubbling it up to the parent of this component.
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
