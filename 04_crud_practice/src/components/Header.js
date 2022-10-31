import React from 'react'

function Header({headText,leftbtn,rightbtn}) {
  return (
    <header>
        <div className='btn_left'>{leftbtn}</div>
        <div className='headtext'>{headText}</div>
        <div className='btn_right'>{rightbtn}</div>
    </header>
  )
}

export default Header