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
