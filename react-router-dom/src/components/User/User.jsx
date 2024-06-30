import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
    console.log(id);
  return (
    <div className='bg-gray-700 text-2xl text-orange-600 px-3 py-3 text-center font-bold'>User : {id}</div>
  )
}

export default User