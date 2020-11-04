import React, { useState } from "react";

function Counter(props) {
  const array = useState(0);
  const count = array[0]; // the first argument returned by useState is our counter value equivalent to: this.state.count
  const setState = array[1] // the second argument is a function to update the counter value equivalent to: this.setState()
  
  return <div>Counter: {count}</div>;
}

export default Counter;
