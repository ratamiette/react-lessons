import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    render() {
        /**
         * return <h1>Hello again</h1><button>Increment</button>;
         * The line above will throw a Parsing error: The JSX elements must be wrapped in an enclosing tag.
         * To fix this, we can wrap these 2 elements into a React.Fragment - it will avoid add extra tags to wrap these elements, like a div 
         */
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;