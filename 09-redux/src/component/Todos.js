import React from "react";

const TodoItem = () => {
  return <li>hello</li>;
};

const TodoList = () => {
  return <TodoItem />;
};
function Todos() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default Todos;
