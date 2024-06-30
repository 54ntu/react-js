<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
<h3>installation methods of react js</h3>

```javascript
  //CRA method i.e. create react app
npx create-react-app [project name]


//we can use vite
npm create vite@latest [project name]
```
# important notes
<p>if we want to stop the iteration of any loop after certain condition or limit in javascript we can use "break" keyword to stop that...</p><br>
<h5>What you can do to exit the function after some limit??????</h5><br>
<h4>Its very easy dude!!!</h4>
<p>use "return" keyword to exit the function</p>

 ```javascript

import { useState } from 'react'
import './App.css'


function App() {

  let [total,setTotal] = useState(0);
  let [message,setMessage]= useState("")

  const addValue= ()=>{
    if(total ===20){
      setMessage("input reached the limit!!!!!!") 
      return;
    }
    setTotal(total+1);
  }

  const decValue=()=>{

    if(total ==0){
    setMessage("oh oh!!! lowest limit reached......")
    return;
  }
  setTotal(total-1);

  return (
    <>
    <h1> counter value is : {total} </h1>
    <p>{message}</p>
    <button style={{marginRight:"5px", backgroundColor:"#90a4ae"}} onClick={addValue}>add value</button>
    <button style={{backgroundColor:"#76ff03"}} onClick={decValue}>decrease value</button>

    </>
  )
}

export default App


```

# Virtual DOM, Fibre and reconciliation


### what is the difference between using anchor tag and Link from react-router-dom 
<p>When we use anchor tag or <a></a>  tag it refresh the page when we click on the link. which we don't want....because when the page is refreshed new copy of the dom is requested to web server which creates delay. Therefore, we use Link tag to solve the problems.</p>


## useContext

<p>concept behind using useContext: </p>
<h5>why should we use useContext hook in react js??????</h5>
<p>When we want to pass the props between the components then using useState is lengthy process, and difficult to implement. Therefore, this useContext hook make this process easy. </p>
# without useContext hook

```javascript

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);



```
<p>In the above example we are passing the states from one components to another. More importantly, even though components 2 and 4 don't need state implementation, they need to pass the state along with it so that the state can be passed to the component 5.</p>


# Using useContext hook

<h4>At first we need to create context </h4>

```javascript

import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()

export default UserContext;

```

Then create context provider 

```javascript

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

```

<p>important : Now all the child components have the access to these states</p>



```javascript
import { useState, createContext, useContext } from "react";

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

```

useContext removes the unnecessarily passing the propes from one components to another components








