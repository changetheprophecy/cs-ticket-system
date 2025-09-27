1) What is JSX, and why is it used?
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's used in React to describe what the UI should look like.


2) What is the difference between State and Props?
Props are immutable data passed from parent to child components for configuration and one-way data flow. State is mutable data managed within a component that can change over time, triggering re-renders. Props are for communication between components, while state is for internal component data management.


3) What is the useState hook, and how does it work?
The useState hook enables functional components to manage state. It takes an initial value and returns an array with the current state and a setter function. When the setter is called, it updates the state and triggers a component re-render. This replaces class component this.state and this.setState in modern React.


4) How can you share state between components in React?
State can be shared through lifting state up (moving state to a common parent), Context API for deeply nested components, state management libraries like Redux for complex applications, or custom hooks for reusable state logic. The most common approach is lifting state to the nearest common ancestor and passing it down via props.


5) How is event handling done in React?
React uses synthetic events with camelCase naming (onClick, onChange) instead of lowercase DOM events. Event handlers are passed as props to elements and receive synthetic event objects. To prevent default behavior, use event.preventDefault() instead of return false. Event handlers can be arrow functions or class methods, often requiring binding or using the public class fields syntax.