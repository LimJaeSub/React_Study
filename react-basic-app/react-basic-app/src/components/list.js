import React,{useState} from 'react'

export const List =React.memo(({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick
}) => {

    const [isEdit,setisEdit] = useState(false);
    const [content,setcontent]=useState();


    const toggleisEdit=()=>{
        setisEdit(true);
    }

    

    const Editfinish=()=>{//수정완료
        console.log(title);
        console.log(content);
        title=content;
        console.log("change");
        console.log(title);
        setisEdit(false);
    }

    const handleCompleteChange=(id)=>{
        let newTodoData = todoData.map((data)=>{
          if(data.id===id){
            data.completed = !data.completed;
          }
          return data;
        });
        setTodoData(newTodoData);
    };

    const handleChange=(e)=>{
        //console.log(e.target.value);
        setcontent(e.target.value);
    };

    return (
      <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
      className={`${snapshot.isDragging?"bg-gray-400":"bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}> 
          <div className=''>
              <input type="checkbox" defaultChecked={false} onChange={()=>handleCompleteChange(id)}/>
              {isEdit?
              <input type={"text"} onChange={handleChange}></input>://isEdit이 true
              <span className={completed?"line-through":undefined}>
                  {title}
              </span>//isEdit이 false
              }
              
          </div>
          <div className='items-center'>
              <button className='px-4 py-2 float-right'onClick={()=>handleClick(id)}>
              x    
              </button>
              {isEdit?
              <button className='px-4 py-2 float-right' onClick={Editfinish}>수정완료</button>//isEdit이 true
              :<button className='px-4 py-2 float-right' onClick={toggleisEdit}>수정하기</button>//isEdit이 false(초기상태)
              }
              
          </div>
      </div>
    );
  
});

export default List


