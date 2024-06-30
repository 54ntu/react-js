import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{

    //     fetch("https://api.github.com/users/54ntu")
    //     .then(response =>response.json())
    //     .then(data=>{setData(data)})

    // },[])
  return (
    <div className='flex md:flex-col items-center'>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers : {data.followers}
      </div>
        <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github


export const githubinfoloader = async()=>{
    const response = await fetch("https://api.github.com/users/54ntu")
    return response.json();
}