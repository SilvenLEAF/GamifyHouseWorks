import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
 
import { AuthContext } from '../../contexts/subContexts/AuthContext'; 




function Home() {
  useEffect(()=>{
    M.AutoInit();    
  }, [])

  

  const { userData } = useContext(AuthContext);
  
  return (
    <div className="container" >

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <h1 id="myLandingTitle" className="pageTitle">
          HouseWorks
        </h1>
        
        <div className="myLandingDescription">
          Gamify your boring chores and super boring houseworks! Take the boredom out and gamify your daily life!!
        </div>

        <div className="myLandingBtnHolder">
          {
            userData ? (
              <Link to="/actionPage" className="btn myBtn waves-effect waves-light myLandingBtn" >
                Gamify
              </Link>
            ) : (
              <Link to="/signup" className="btn myBtn waves-effect waves-light myLandingBtn" >
                Signup to Gamify
              </Link>
            )
          }
        </div>
      </div>
      


      
    </div>
  )
}

export default Home
