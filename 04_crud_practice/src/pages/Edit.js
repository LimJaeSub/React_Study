import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Edit = () => {

  const [searchParams,setSearchParams]=useSearchParams();
  const navigate = useNavigate()
  const id=searchParams.get('id');
  const user = searchParams.get('user');
  // queryString
  console.log(user);
  console.log(id);
  return (
    <div>
      <h2>Edit</h2>
      <button onClick={()=>setSearchParams({who:"bye"})}>change</button>
      <button onClick={()=>{
        navigate("/home");
      }}>Go Home Navigate</button>
      <button onClick={()=>{
        navigate(-1);
      }}>Back</button>
    </div>
  )
}

export default Edit