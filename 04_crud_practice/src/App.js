import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

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


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>일정짜기</h1>
        <img src={kang} />
        <img src={kuku} />
        <img src={onetwo} />
        <Buttons onClick={()=>alert("hello")} type={'positive'} text={"작성"} />
        <Buttons onClick={()=>alert("hello")} type={'negative'} text={"삭제"} />
        <Buttons onClick={()=>alert("hello")} type={'default'} text={"수정"} />
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
  );
}

export default App;
