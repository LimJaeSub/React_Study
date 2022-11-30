import React,{useCallback} from "react";
import Todos from "../component/Todos";

// @ Redux
import { useDispatch,useSelector } from "react-redux";
import {addTodo,toggleTodo} from "../modules/todos";


function TodosContainer() {

  const dispatch = useDispatch();

  //@ useSelector를 이용해 todo 상태 가져오기
  const todos = useSelector(state=>state.todos);
  // @ state에 새로운 text 넣기
  const createText = (text)=>{
    dispatch(addTodo(text));
  }
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);


  return (
    <div>
      <Todos getText={createText} onToggle={onToggle} todos={todos} />
    </div>
  );
}

export default TodosContainer;
