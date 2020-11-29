import React from 'react'

function TaskListItem({ item }) {
  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(${ item.profileImage || "/Logo.png" }) center/cover` }}></div>
    <div>
      <div className="myUserName">
        {item.title}
      </div>

      <p className="grey-text">
        {item.rank}
      </p>
    </div>

    <div className="fa fa-eye"></div>

  </li>
  )
}

export default TaskListItem
