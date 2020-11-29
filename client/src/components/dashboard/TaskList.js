import M from 'materialize-css'
import '../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { usePaginatedQuery } from 'react-query'
 
 





import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { AllUserContext } from '../../contexts/subContexts/AllUserContext'



import UserListItem from './UserListItem'
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
  const { allUsers, setAllUsers } = useContext(AllUserContext)
  const history = useHistory()
  


  const { resolvedData, latestData, status } = usePaginatedQuery("allusers", getAllTasks)
  if(resolvedData) setAllUsers(resolvedData);





  if(!userData) history.push('/login');
  if(userData && !userData.isVerified) history.push('/verifyDoor');

  return !allUsers[0] ?  (
    <div className="myLoaderPageHolder">
      <MyLoader/>
    </div>
  ) : (
    <div className="container myUserListPage" >      
      <h6 className="blue-text">All users</h6>


      <ul>
        {
          allUsers[0] && allUsers.map((item, index)=>{
            return (
              <Link to={ "/userProfile/" + index } key={ index } >
                <UserListItem item={ item } />
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default TaskList
