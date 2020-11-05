import React, { Fragment, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  // const array = useState(0);
  // const count = array[0]; // the first argument returned by useState() is our counter value equivalent to: this.state.count
  // const setCount = array[1] // the second argument is a function to update the counter value equivalent to: this.setState()
  // Hooks can't be called into loops, conditions and nested functions.

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} has clicked ${count} times!`);

  // useEffect(() => {
  //   // the code that would be into the componentDidMount and componentDidUpdate lifecycle methods
  //   console.log("useEffect callback");

  //   document.title = `${name} has clicked ${count} times!`;

  //   return () => {
  //     // the code that would be into the componentWillUnmount lifecycle method
  //     console.log("Clean Up");
  //   };
  // }, [count]); // array of dependencies - will list all the state's variables that the useEffect hook depends upon.

  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times!
      </div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
