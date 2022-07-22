import React,{useState} from 'react';
import './App.css';

// components
import InputForm from './components/InputForm.js';
import UserList from './components/UserList';

function App() {
  const [userLists,setUserLists] = useState();


  const updateList=(newValue)=>{
    console.log(newValue);
  }
  
  return (
    <div>
      <InputForm updateList={updateList} />
      {/* <UserList userLists={userLists}/> */}
    </div>
  );
}

export default App;
