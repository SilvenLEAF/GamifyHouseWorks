import M from 'materialize-css'
import '../../styles/profile/UserList.scss'
import '../../styles/dashboard/TaskList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { usePaginatedQuery } from 'react-query'
 
 





import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { AllTaskContext } from '../../contexts/subContexts/AllTaskContext'



import TaskListItem from './TaskListItem'
import MyLoader from '../../helpers/MyLoader';






const getAllTasks = async ()=>{
  

  const allTaskRes = await fetch('/houseWork/all');
  const allTaskData = await allTaskRes.json();

  console.log(allTaskData);
  return allTaskData
}





function TaskList() {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext)
  const { allTasks, setAllTasks } = useContext(AllTaskContext)
  const history = useHistory()
  


  const { resolvedData, latestData, status } = usePaginatedQuery("allTasks", getAllTasks)
  if(resolvedData) setAllTasks(resolvedData);





  // if(!userData) history.push('/login');
  // if(userData && !userData.isVerified) history.push('/verifyDoor');

  return !allTasks[0] ?  (
    <div className="myLoaderPageHolder">
      <MyLoader/>
    </div>
  ) : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">All Tasks</h6>


      <ul>
        {
          allTasks[0] && allTasks.filter( item => item.rank.toLowerCase() === 'silver' ).map((item, index)=>{
            return <TaskListItem index={ index } item={ item } iconImage="/images/rank/silver.jpeg" key={ index } />
          })          
        }


        {
          allTasks[0] && allTasks.filter( item => item.rank.toLowerCase() === 'gold' ).map((item, index)=>{
            return <TaskListItem index={ index } item={ item } iconImage="/images/rank/gold.jpeg" key={ index } />
          })          
        }

       

        {
          allTasks[0] && allTasks.filter( item => item.rank.toLowerCase() === 'platinum' ).map((item, index)=>{
            return <TaskListItem index={ index } item={ item } iconImage="/images/rank/platinum.jpeg" key={ index } />
          })          
        }
      </ul>



    </div>
  )
}

export default TaskList
