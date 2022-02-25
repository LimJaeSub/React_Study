import React,{Component} from "react";
import "./App.css";
export default class App extends Component{
  todoData=[
    {
      id:"1",
      title:"공부하기",
      completed:true
    },
    {
      id:"2",
      title:"청소하기",
      completed:false
    },
  ];
  render(){
    return(
      <div className="container">
        <div className="todoBlock">
          <h1>할 일 목록</h1>
          
      {this.todoData.map((data)=>(
        <div className="list">
          <input type="checkbox" defaultChecked={false}></input>
            {data.title}
          <button className="btn">X</button>
        </div>
      ))}

        </div>
        
      </div>
    )
  }
}