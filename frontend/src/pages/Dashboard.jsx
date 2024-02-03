import React from 'react'

function Dashboard() {
  return (
    <div>
          <div className='flex gap-5 pt-3 ml-5'>
      <div className='w-[300px] h-[200px] border-b-4  bg-gray-400 border-purple-700 rounded pt-20 text-4xl text-white text-center'>Teachers</div>
      <div className='w-[300px] h-[200px] border-b-4  bg-gray-300  border-sky-700 rounded  pt-20 text-4xl text-white text-center'>Students</div>
      <div className='w-[300px] h-[200px] border-b-4  border-blue-700 bg-gray-400 rounded  pt-20 text-4xl text-white text-center'>Classes</div>

    </div>
    </div>
  )
}

export default Dashboard
