## React

Two projects
1. Tic tac toe from Reactjs.org
2. Robo Friends app from Udemy

React component class, or React component type-> lets you split the UI into independent, reusable pieces 
Subclass-> React.Component or React.PureComponent.

### JSX
JSX is a syntax extension to JavaScript. Looks like a template language, but it comes with the full power of JavaScript. JSX produces React “elements” which are then rendered to the DOM. Rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display. React doesn’t require using JSX, but it is helpful as a visual aid when working with UI inside the JavaScript code.  Eg of JSX in React:

```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
JSX:
1. helps prevent XSS (cross-site-scripting) attacks as it doesn't inject anything that



### React npm template

To download react app template

```
npm create-react-app 
```

This downloads necessary scripts and packages. Package.json specifies these scripts. You can directly call 'npm start/build etc' from cmd
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
```
