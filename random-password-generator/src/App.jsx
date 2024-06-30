import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed,setCharacterAllowed] = useState(false)
  const [password,setPassword] = useState("")


  //useRef
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
    let pass= ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789"
    if(characterAllowed) str+="!~@#$%^&*(){}><?"
    for (let i = 1; i <= length; i++) {
       let char = Math.floor(Math.random() * str.length + 1);
       pass = pass + str.charAt(char);
      
    }
   

    setPassword(pass)


  },[length,numberAllowed,characterAllowed,setPassword])


  const passwordCopyToClipboard =useCallback(()=>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)

  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className="h-[300px] w-[800px] mx-auto mt-20 rounded-lg bg-slate-600">
          <h1 className="text-white text-xl text-center  py-10">Password generator</h1>
        <div className=" flex items-center justify-center gap-2 ">
          <input type="text" className="w-[400px] h-10 rounded-md outline-none text-xl " defaultValue={password } ref={passwordRef}/>
          <button className="bg-yellow-300 py-2 px-3 rounded-md font-bold text-xl" onClick={passwordCopyToClipboard}>Copy</button>
        </div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <input type="range"  min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="length" className="text-xl">length : {length} </label>
          <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }} />
          <label htmlFor="Number" className="text-xl">Number</label>
          <input type="checkbox" defaultChecked={characterAllowed} onChange={()=>{
            setCharacterAllowed((prev)=>!prev)
          }} />
          <label htmlFor="character" className="text-xl ">Character</label>
        </div>
      </div>
    </>
  );
};

export default App;
