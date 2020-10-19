import React, { Component } from 'react';

class Counter extends Component {
    render() {
        /**
         * return <h1>Hello again</h1><button>Increment</button>;
         * The line above will throw a Parsing error: The JSX elements must be wrapped in an enclosing tag.
         * To fix this, we can wrap these 2 elements into a React.Fragment - it will avoid add extra tags to wrap these elements, like a div 
         */
        return (
            <React.Fragment>
                <h1>Hello again</h1>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;