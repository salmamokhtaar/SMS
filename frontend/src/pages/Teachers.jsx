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

  const handleSearch=(id) =>{
    const key=id.target.value
   if(key){
    axios.get(`http://localhost:5000/teacher/search/${key}`).then((response) =>{
      setTeachers(response.data)
    }).catch((error) => console.log(error))
   }
   else
   getAllTeachers(); 
  }

  const deleteTeacher = (id) => {
    axios.delete(`http://localhost:5000/delete/teacher/${id}`).then(()=>{
      alert("Teacher Has Been Deleted..");
      getAllTeachers();
    }).catch((error) => console.log(error))
  }


 

  return (

    

    <div>
    <div className='py-5 flex justify-between'>
          <Link to={"/addteacher"} className=' bg-purple-700 text-2xl text-white px-6 py-3' >Add Teacher</Link>
     <form className='mr-5'>
      <input onChange={handleSearch} type='text' placeholder='Search Teacher' className='w-[350px] h-[50px] border-2 border-black rounded pl-6'></input>
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
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {/* xogta */}
      <tbody>
        {

         teacher.length>0 ?  teacher.map((data)=>{
        return  <tr className='text-center text-1xl mt-10'>
          <td>{data.id}</td>
          <td> {data.name} </td>
          <td>{data.email}</td>
          <td>{data.address}</td>

          <td>{data.gender}</td>
          <td>{data.salary}</td>
          <td> {new Date (data.createdAt).toDateString()}</td>
          <td><Link to={`/updateteacher/${data._id}`}><i class="fa-regular fa-pen-to-square ml-5 text-purple-600 cursor-pointer"></i></Link></td>

          <td><i onClick={() => deleteTeacher(data._id)} className='fa-sharp fa-solid fa-trash ml-5 text-purple-600 cursor-pointer '></i></td>
         
        </tr>
        })
        :<p>There is no data yet</p>
        }
      </tbody>
    </table>
    </div>
  )
}

export default Teachers
