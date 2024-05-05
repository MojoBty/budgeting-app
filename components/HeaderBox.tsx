import React from 'react'

const HeaderBox = ( {type = "title", title, subtext, user} : HeaderBoxProps ) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        Welcome, user
      </h1>
      <h2 className='header-box-subtext'>
        {subtext}
      </h2>
        
    </div>
  )
}

export default HeaderBox