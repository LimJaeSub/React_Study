import React,{useState} from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";


export default function App(){
  console.log("App")
  const [todoData,setTodoData]= useState([])
  const [value,setValue] = useState("");

  const handleClick=(id)=>{
    let newTodoData = todoData.filter(data=>data.id!==id);
    setTodoData(newTodoData);
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    let newTodo={
      id:Date.now(),
      title:value,
      completed:false
    }
    setTodoData(prev=>[...prev,newTodo]);
    setValue("");
  }

  
  return(
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        
        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
          
        
      </div>
    </div>
  )
  
}