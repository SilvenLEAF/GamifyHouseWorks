import React from 'react'
import { Link } from 'react-router-dom'





function TaskListItem({ item, iconImage }) {
  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(${ iconImage || "/Logo.png" }) center/cover` }}></div>
    <div>
      <div className="myUserName">
        {item.title}
      </div>

      {/* <p className="grey-text">
        {item.rank}
      </p> */}

      
      <div className="myBtnsHolder myTaskListItemBtnsHolder right-align">
        
        <Link to="/editHouseWork" className="btn mySecondaryBtn waves-effect waves-light myCornerless" >
          Edit <i className="fa fa-edit"></i>
        </Link>
        
        <button className="btn myBtn waves-effect waves-light myCornerless" >
          Done <i className="fa fa-check"></i>
        </button>
      </div>
    </div>

    

  </li>
  )
}

export default TaskListItem
