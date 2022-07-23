import React from 'react'

function UserInfo(props) {
    console.log(props);
  return (
    <div>
        <div className='Info__name'>{props.name}</div>
        <div className='Info__Age'>{props.age}</div>
    </div>
  )
}

export default UserInfo