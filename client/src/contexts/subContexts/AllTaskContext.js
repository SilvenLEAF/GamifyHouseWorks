import React, { createContext, useState } from 'react'


export const AllTaskContext = createContext();


function AllTaskContextProvider({ children }) {
  const [allTasks, setAllTasks] = useState([]);
  return (
    <AllTaskContext.Provider value={{ allTasks, setAllTasks }} >
      { children }
    </AllTaskContext.Provider>
  )
}

export default AllTaskContextProvider
