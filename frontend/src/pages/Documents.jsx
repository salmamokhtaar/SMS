import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Documents() {
  const [model ,setModel] = useState()
  
  const handleModel = () => {
    setModel(true)

  }
  const closeModel = (e) => {
    e.preventDefault()
    setModel(false)

  }
  return <>
    <div className='p-6 mb-10'>
      <NavLink onClick={handleModel}   className='bg-purple-500 p-3 m-3' >Upload Document</NavLink>
    </div>
    {/* form */}
    <div style={{display : model === true ? "flex" : ""}}  className='hidden justify-center animate-bounce '>
    <form className='p-10 bg-gray-300 w-[400px] h-[200px] text-white '>

        <input className='h-[50px] w-[350px] border-purple-700 border-2 file-bg-red-500 file:border-0 file:text-white  pl-5' type="file" accept='.pdf' placeholder='' />
        <br/>
        <br/>
        <button onClick={closeModel} className='mr-10 bg-purple-500 px-5 py-3 text-white text-lg'>Close</button>
        <button   className='bg-rose-500 px-5 py-3 text-white text-lg'>Upload</button>
             </form>
    </div>
    </>
  
}

export default Documents
