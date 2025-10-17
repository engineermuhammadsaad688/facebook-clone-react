import React from 'react'
import Right from './Right'

const LeftSidebar = () => {
  return (
    <>
      <div className="left-sidebar">
        <div className="imp-link">
          <a href="#"> <img src="./images/news.png" /> Latest News</a>
          <a href="#"><img src="./images/friends.png" /> Friends </a>
          <a href="#"> <img src="./images/group.png" />Groups</a>
          <a href="#"><img src="./images/marketplace.png" /> Marketplace</a>
          <a href="#"><img src="./images/watch.png" /> Watch</a>
          <a href="#"> See More</a>




        </div>
        <Right />

      </div>

    </>
  )
}

export default LeftSidebar
