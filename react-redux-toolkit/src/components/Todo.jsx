import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

const Todo = () => {
  const todos=  useSelector(state=>state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <div className='flex items-center px-20'>
        {todos.map((todo) => (
          <li key={todo.id} className="list-none flex flex-row gap-1 ">
            <h2 className="bg-green-400 text-xl p-3"> {todo.text}</h2>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-yellow-600 p-3 "
            >
              X
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todo