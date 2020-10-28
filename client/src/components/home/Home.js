import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'




function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <div id="myLandingTitle" className="pageTitle">
          Gamify HouseWorks
        </div>
        
        <div className="myLandingDescription">
          Gamify your boring chores and super boring HouseWorks. Take on adventures, complete tasks, earn rewards, level up!
        </div>

        <div className="myLandingBtnHolder">
          <Link to="/search" className="btn myBtn waves-effect waves-light myLandingBtn" >
            Gamify HouseWorks
          </Link>
        </div>
      </div>
      


      
    </div>
  )
}

export default Home
