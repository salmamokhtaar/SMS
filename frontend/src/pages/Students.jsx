import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Students() {
  const [studnet, setStudent] = useState([]);

  // get student data
  const handleStudent = () => {
    axios.get("http://localhost:5000/get/student").then((response)=> {
      setStudent(response.data);
    }).catch((error)=> console.log(error))
  };
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000//delete/student/${id}`).then(()=>{
      alert("Student Has Been Deleted..");
      handleStudent();
    }).catch((error) => console.log(error))
  }

  useEffect(()=> {
    handleStudent();
  },)
  
  
  return (
    <div>

    <div className='py-5 flex justify-between'>
      <Link to={'/addstudent'} className='bg-purple-600 text-white px-5 py-3 rounded mb-3'>Add Student</Link>
      <form className='mr-5'>
        <input className='h-[50px] w-[350px] border-black border-2 pl-5' type="text" placeholder='Search Student' />
      </form>
    </div>
    <table className='w-full'>
      <thead className='bg-gray-200'>
        <tr className='text-1xl'>
         <th className='p-3'>ID</th>
         <th>Name</th>
         <th>Address</th>
         <th>Gender</th>
         <th>Date</th>
         <th>Edit</th>
         <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
        studnet.map((ele)=> {
         return (
          <tr className='text-center'>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.address}</td>
            <td>{ele.gender}</td>
            <td>{ele.createdAt}</td>
            <td><i onClick={() => deleteStudent(data._id)} className='fa-sharp fa-solid fa-trash ml-5 text-purple-600 cursor-pointer '></i></td>
         
            </tr>
            )
          })

        }
            
             
      </tbody>
    </table>
    </div>
  )
}

export default Students