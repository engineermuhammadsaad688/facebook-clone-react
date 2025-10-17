import React from 'react'
import LeftSidebar from './LeftSidebar'
import MainContent from './MainContent'
import RightSidebar from './RightSidebar'

const News = () => {
  return (
    <div className='container'>
<LeftSidebar/>
<MainContent/>
<RightSidebar/>
    </div>
  )
}

export default News