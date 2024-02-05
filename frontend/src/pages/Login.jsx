import React from 'react'

function Login() {
  return (
    <div className='h-screen w-full bg-gray-300'>
      <h1>Here is Login Page</h1>
      <div>
        <form className='w-[400px] p-5 rounded shadow-lg h-[300px] bg-white'>
            <input className='border-2 border-gray-400 w-[340px] h-[50px] ' type='text' placeholder='Enter Username'></input>
            <br/>
            <br/>
            <input className='border-2 border-gray-400 w-[340px] h-[50px] ' type='text' placeholder='Enter Password'></input>
            <button type='submit' ></button>
        </form>
      </div>

    </div>
  )
}

export default Login
