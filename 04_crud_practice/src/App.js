import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useReducer, useRef} from 'react';

// pages
import Home from './pages/Home';
import Edit from './pages/Edit';
import List from './pages/List';
import New from './pages/New';

//images
import kang from './assets/kang.png';
import kuku from './assets/kuku.png';
import onetwo from './assets/onetwo.png';

//components
import Buttons from './components/Buttons';
import Header from './components/Header';
import DataContext from './Datacontext';

const reducer = (state,action)=>{
  let newState = [];
  switch(action.type){
    case "INIT":{
      return action.data;
    }
    case "CREATE":{
      const newItem={
        ...action.data
      };
      newState=[newItem,...state];
      break;
    }
    case "REMOVE":{
      newState = state.filter((it)=>it.id!==action.targetId);
      break;
    }
    case "EDIT":{
      newState = state.map((it)=>it.id===action.data.id?{...action.data}:it)
      // @ state 배열을 map을 사용해서 새로운 배열로 map하는것
      // @ it의 id가 action.data의 id와 같으면(수정할 데이터의 id)it에 action의 data를 넘겨주고 아니면 그냥 it을 넘겨준다(기존값)
      break;
    }
    default:
      return state;
  }

  return newState;
}
function App() {
  const defaultData = [
    {
      id:1,
      emotion:1,
      content:"내용",
      date:1667225842647
    },
    {
      id:2,
      emotion:2,
      content:"내용2",
      date:1667225842646
    },
    {
      id:3,
      emotion:3,
      content:"내용3",
      date:1667225842649
    },
  ];
  const [data,dispatchdata] = useReducer(reducer,defaultData);
  
  const dataId = useRef(0);
  //Create
  const onCreate = (date,content,emotion)=>{
    dispatchdata({type:"CREATE",data:{
      id:dataId.current,
      date:new Date(date).getTime(),
      content,
      emotion,
    }})
    dataId.current+=1;
  };

  //Remove
  const onRemove = (targetId)=>{
    dispatchdata({type:"REMOVE",targetId})
  }

  //Edit
  const onEdit = (targetId,date,content,emotion)=>{
    dispatchdata({type:"EDIT",data:{
      id:targetId,
      date:new Date(date).getTime(),
      content,
      emotion,
    }})
  }

  // @ dispatch로 얻은 data를 provider를 통해 파일 전역에 공급
  return (
    <DataContext.Provider value={{data,onCreate,onEdit,onRemove}}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/list/:id' element={<List/>} /> 
            {/* url 경로와 components를 mapping 시켜주는 기능 */}
            <Route path='/list' element={<List />}/>
            {/* id가 없는 게시글(없는 게시글일 경우)의 route */}
          </Routes>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
    
  );
}

export default App;
