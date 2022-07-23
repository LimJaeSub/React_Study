import React from 'react'
import UserInfo from './UserInfo';

function UserList(props) {
  const value = props.userLists;
  //console.log(value.map((it)=>it.name));
  return (
    <div>
      {value.map((it)=>
      <UserInfo 
      key={it.id}
      name={it.name}
      age={it.age}/>)}
    </div>
  )
}

export default UserList