import React,{useState,useCallback} from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";


export default function App(){
  const [todoData,setTodoData]= useState([])
  const [value,setValue] = useState("");

  const handleClick=useCallback((id)=>{
    let newTodoData = todoData.filter(data=>data.id!==id);
    setTodoData(newTodoData);
  },[todoData]);//TodoData가 변경될 때만 함수 재생성

  const alldeleteClick = useCallback(()=>{
    let todolength = todoData.length;
    let cleanData = todoData.slice(todolength);
    setTodoData(cleanData);
  },[todoData])
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    let newTodo={
      id:Date.now(),
      title:value,
      completed:false
    }
    setTodoData(prev=>[...prev,newTodo]);
    setValue("");
  };
  const handleChange=(e)=>{
    setValue(e.target.value);
  };

  
  return(
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button className="allclean" onClick={alldeleteClick}>모두 지우기</button>
        </div>
        
        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} value={value} setValue={setValue}/>
          
        
      </div>
    </div>
  )
  
}