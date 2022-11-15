import React, { useEffect, useState,useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';
function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = useCallback((tasksObj) =>{
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  },[]);
  // @ applyData
  // @ useHttp에서 나온 Data를 마지막에 tasks에 넣어줌

  const {isLoading,error,sendRequest:fetchTasks} = useHttp(transformTasks)
    // @ useHttp의 리턴값을 구조 분해 할당으로 선언해줌

    // @ useHttp의 재생성을 막으려면 여기도 설정을 해줘야한다.
    // @ app.js에서는 url과 method는 동일하니까 transformTasks만 useCallback으로 설정해주면 됨.
    // @ 함수 외 다른 상수값은 usememo를 통해 재사용을 막으면 된다.


  useEffect(() => {
    fetchTasks({
      url:'https://customhook-b2809-default-rtdb.firebaseio.com/tasks.json',
      method:'GET'
      },);
  }, []);
  // @ 함수가 재실행되면 자바스크립트에서는 메모리가 새로운 객체로 인식되어 재생성하게 된다.
  // 재생성하면 fetchTasks가 재생성되고 fetchTasks는 usehttp에서 sendrequest이므로 함수 내에서 상태가 또 변한다.
  // 만약 여기서 의존성 배열에 fetchTasks를 넣어주면 무한루프에 빠질 수가 있다.
  // 방법은 usehttp에서 sendrequest를 useCallback으로 선언해주는 것이다.



  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
