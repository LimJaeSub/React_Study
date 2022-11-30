import React from "react";
import "./App.css";
import CounterContainer from "./container/CounterContainer";
import TodosContainer from "./container/TodosContainer";
function App() {
  return (
    <React.Fragment>
      <CounterContainer />
      <TodosContainer />
    </React.Fragment>
  );
}

export default App;
