import React from 'react';
import ReactDom from 'react-dom';

/**
 * <h1>Hello</h1> = JSX expression
 * Babel will compile the JSX expression to a call to React.createElement - that's why we need to import the React object on the top.
 * The result of a JSX expression is a react element which is part of a virtual DOM.
 * To render this inside of the real DOM, we have to import the ReactDom on the top.
 */

const element = <h1>Hello</h1>;
// console.log(element);

// To render this inside of the real Dom:
ReactDom.render(element, document.getElementById('root'));