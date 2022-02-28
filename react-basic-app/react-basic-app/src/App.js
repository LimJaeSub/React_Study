import React,{Component} from "react";
import "./App.css";


export default class App extends Component{

  state={
    todoData:[
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
    ],
    value:""
  }
  

  handClick=(id)=>{
    let newTodoData = this.state.todoData.filter(data=>data.id!==id);
    this.setState({todoData:newTodoData});
  };

  handleChange=(e)=>{
    this.setState({value:e.target.value});
    console.log(this.state.value);
  };

  handleSubmit=(e)=>{
    e.preventDefault();

    let newTodo={
      id:Date.now(),
      title:this.state.value,
      completed:false
    }
    this.setState({todoData:[...this.state.todoData,newTodo]});
  }


  render(){
    return(
      <div className="container">
        <div className="todoBlock">
          <h1>할 일 목록</h1>
            {this.state.todoData.map((data)=>(
              <div className="list" key={data.id}>
                <input type="checkbox" defaultChecked={false}></input>
                  <label htmlFor="datatitle">{data.title}</label>
                <button className="btn" onClick={()=>this.handClick(data.id)}>X</button>
              </div>
            ))}
            <form className="formbox" onSubmit={this.handleSubmit}>
              <input type="text" className="inputbox" name="value" placeholder="해야할 일 입력" value={this.state.value} onChange={this.handleChange}></input>
              <input type="submit" value="입력" className="formbtn"></input>
            </form>
        </div>
      </div>
    )
  }
}