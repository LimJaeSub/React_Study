import React,{useState} from 'react';
import './App.css';

// components
import InputForm from './components/InputForm.js';
import UserList from './components/UserList';

const INIT_OBJECT=[
  {
    id:0,
    age:"000",
    name:"000",
  },
]


function App() {
  const [userLists,setUserLists] = useState(INIT_OBJECT);


  const updateList=(newValue)=>{
    setUserLists((prevState)=>{
      return [newValue,...prevState]
    });

  }
  
  return (
    <div>
      <InputForm updateList={updateList} />
      <UserList userLists={userLists}/>
    </div>
  );
}

export default App;
