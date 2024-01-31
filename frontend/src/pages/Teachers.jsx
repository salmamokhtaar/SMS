import React from 'react'
import {Link}  from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Teachers() {
  const [teacher, setTeachers] =  useState([])

  const getAllTeachers =() => {
      axios.get("http://localhost:5000/teacher/get").then((response)=>{
        setTeachers(response.data)
      }).catch((error) => console.log(error))
  }

  useEffect(() =>{
      getAllTeachers()
  },[])
 

  return (

    

    <div>
    <div className='py-5 flex justify-between'>
          <Link to={"/addteacher"} className=' bg-purple-700 text-2xl text-white px-6 py-3' >Add Teacher</Link>
     <form className='mr-5'>
      <input type='text' placeholder='Search Teacher' className='w-[350px] h-[50px] border-2 border-black rounded pl-6'></input>
     </form>
    </div>
    <table className='w-full '>
      <thead className='bg-gray-200'>
        <tr className='text-[15px] text-center '>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Gender</th>
          <th>Salary</th>
          <th>Date</th>
        </tr>
      </thead>
      {/* xogta */}
      <tbody>
        {
        teacher.map((data)=>{
        return  <tr className='text-center text-1xl mt-10'>
          <td>{data.id}</td>
          <td> {data.name} </td>
          <td>{data.email}</td>
          <td>{data.address}</td>

          <td>{data.gender}</td>
          <td>{data.salary}</td>
          <td>{data.createdAt}</td>
        </tr>
        })
        }
      </tbody>
    </table>
    </div>
  )
}

export default Teachers
