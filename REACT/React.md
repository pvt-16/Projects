## React

Two projects
1. Tic tac toe from Reactjs.org
2. Robo Friends app from Udemy

React component class, or React component type-> lets you split the UI into independent, reusable pieces 
Subclass-> React.Component or React.PureComponent.

### JSX
JSX is a syntax extension to JavaScript. Looks like a template language, but it comes with the full power of JavaScript. JSX produces React “elements” which are then rendered to the DOM. Eg of JSX:

```
const element = <h1>Hello, world!</h1>;
```
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
