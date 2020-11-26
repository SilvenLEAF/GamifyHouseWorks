import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
 
 




function Home() {
  useEffect(()=>{
    M.AutoInit();    
  }, [])

  

  
  return (
    <div className="container" >

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <h1 id="myLandingTitle" className="pageTitle">
          HouseWorks
        </h1>
        
        <div className="myLandingDescription">
          Gamify your boring chores and super boring houseworks! Take the boredom out of your and gamify your daily life!!
        </div>

        <div className="myLandingBtnHolder">
          <Link to="/actionPage" className="btn myBtn waves-effect waves-light myLandingBtn" >
            Action Button
          </Link>
        </div>
      </div>
      


      
    </div>
  )
}

export default Home
