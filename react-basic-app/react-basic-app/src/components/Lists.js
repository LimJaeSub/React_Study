import React from 'react'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';
import List from "./List";


const Lists = React.memo( ({todoData,setTodoData,handleClick}) => {

    const handleEnd=(result)=>{
        console.log(result);

        if(!result.destination) return;
        const newTodoData = todoData;

        const [reorderedItem] = newTodoData.splice(result.source.index,1);
        //원래 위치한 값 삭제

        newTodoData.splice(result.destination.index, 0 ,reorderedItem)
        //해당 위치에 새로운 값 집어넣기
        setTodoData(newTodoData);
    }
    return (
        <div>
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="todo">
                {(provided)=>(
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                    {todoData.map((data,index)=>(
                        <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                            {(provided,snapshot)=>(
                                <List
                                    handleClick={handleClick}
                                    key={data.id}
                                    id={data.id}
                                    title={data.title}
                                    completed={data.completed}
                                    todoData={todoData}
                                    setTodoData={setTodoData}
                                    provided={provided}
                                    snapshot={snapshot}
                                />
                            )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </div>
                )}
            </Droppable>
        </DragDropContext>
        
    </div>
  );
});

export default Lists



