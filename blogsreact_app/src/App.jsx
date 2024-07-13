import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login,logOut} from "./store/authSlice"

const App = () => {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logOut())
    }
  })
  .finally(()=>setLoading(false))

},[])

  console.log(import.meta.env.VITE_APPWRITE_URL);
  return loading ? null : (
    <div> hello</div>
  )
}

export default App