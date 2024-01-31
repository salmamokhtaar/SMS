import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Sidenav from './Components/Sidenav'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Documents from './pages/Documents'
import RegisterTeacher from './Components/RegisterTeacher'
function App() {
  return (
    <Sidenav>

    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/teachers' element={<Teachers/>}/>
      <Route path='/documents' element={<Documents/>}/>
      <Route path='/addteacher' element={<RegisterTeacher/>}/>
    </Routes>
    </Sidenav>

  )
}

export default App
