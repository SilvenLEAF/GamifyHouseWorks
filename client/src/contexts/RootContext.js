import React from 'react'
import AllUserContextProvider from './subContexts/AllUserContext'
import AllTaskContextProvider from './subContexts/AllTaskContext'



function RootContext({ children }) {
  return (
    <>
      
      <AllUserContextProvider>
        <AllTaskContextProvider>
          { children }
        </AllTaskContextProvider>
      </AllUserContextProvider>
    
    </>
  )
}

export default RootContext
