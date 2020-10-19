import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
        ,tags: ['tag1', 'tag2']
    };

    // constructor() {
    //     super();
    //     // That's a way to make the "this" into the handleIncrement method refer our component - else, undefined will be returned
    //     // The current solution we'll use to fix this is convert the handleIncrement to an arrow function (arrow functions does not rebind the "this")
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() {
        /**
         * return <h1>Hello again</h1><button>Increment</button>;
         * The line above will throw a Parsing error: The JSX elements must be wrapped in an enclosing tag.
         * To fix this, we can wrap these 2 elements into a React.Fragment - it will avoid add extra tags to wrap these elements, like a div 
         */
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={ tag }>{ tag }</li>)}
                </ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";

        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    // Converted to arrow function - by this way the "this" will refer that object, otherwise will be undefined
    handleIncrement = () => {
        console.log('Increment', this);
    }
}

export default Counter;