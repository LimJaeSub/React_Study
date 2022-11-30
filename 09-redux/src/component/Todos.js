// @ 프리젠테이셔널 컴포넌트

import React,{useState} from "react";

// @ 할일 보여주는 것
const TodoItem = ({id,text,onToggle,isdone}) => {
  return (
    <li style={{ textDecoration: isdone ? 'line-through' : 'none' }}
     onClick={()=>onToggle(id)}>{text}</li>
  );
};

const TodoList = ({todos,onToggle}) => {  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem isdone={todo.done} id={todo.id} text={todo.text} onToggle={onToggle} />
      ))}
    </ul>
  )
};


function Todos({getText,todos,onToggle}) {
  //console.log(todos);
  const [newText,setNewText] = useState();

  const onChangeHandler = (e)=>{
    setNewText(e.target.value);
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault(); // @ 새로고침 방지
    getText(newText);
    setNewText('');
  }


  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onChangeHandler} value={newText||""} />
        <button type="submit">추가</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default Todos;
