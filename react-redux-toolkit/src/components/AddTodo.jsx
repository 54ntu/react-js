import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input,setInput]=useState('')
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')

    }
  return (
    <form onSubmit={addTodoHandler} className='items-center flex py-10 px-20 '>
        <input type="text"  className='bg-slate-300 p-2 rounded mr-1' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button className='bg-red-300 rounded-sm p-2 font-bold'>Add Todo</button>



    </form>
  )
}

export default AddTodo