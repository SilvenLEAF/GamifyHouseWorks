import M from 'materialize-css'


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import NamePlate from './NamePlate';
import TaskList from './TaskList';
 
 




function Dashboard() {
  useEffect(()=>{
    M.AutoInit();    
  }, [])

  

  
  return (
    <>      
      <NamePlate/>
      <TaskList/>
    </>
  )
}

export default Dashboard
