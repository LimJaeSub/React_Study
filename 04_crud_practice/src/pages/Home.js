import React,{useContext, useEffect, useState} from 'react'
import Buttons from '../components/Buttons';
import Header from '../components/Header';
import DataContext from '../Datacontext';
const Home = () => {
  const ctx = useContext(DataContext);
  const [currentDate,setCurrentDate] = useState(new Date());
  const [data,setData] = useState([]);
  const headText = `${currentDate.getFullYear()}년 ${currentDate.getMonth()+1}월`


  useEffect(()=>{
    const firstDay = new Date(currentDate.getFullYear(),currentDate.getMonth(),1).getTime(); //@ 그 달의 첫째 날 가져옴, 그것의 getTime()
    const lastDay = new Date(currentDate.getFullYear(),currentDate.getMonth()+1,0).getTime();

    setData(ctx.filter((it)=>firstDay<=it.date && it.date<=lastDay)); 
    // @ context에서 date를 가져와 date가 firstDay ~ lastDay 사이에 있는 것만 filter해서 추출
    // @ filter로 추출된 ctx를 useState를 통해 data에 넘겨줌
  },[ctx,currentDate]); 
  //@ 날짜가 변경되는 순간만 작동
  //@ 또한 전체 context가 변경된 순간에도 작동해야 업데이트가 됨

  const increaseMonth = ()=>{
    setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()+1,currentDate.getDate()));
  }

  const decreaseMonth = ()=>{
    setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()-1,currentDate.getDate()));
  }
  return (
    <Header headText={headText} leftbtn={<Buttons text="이전" onClick={decreaseMonth}/>} rightbtn={<Buttons text="다음" onClick={increaseMonth}/>}>

    </Header>
  )
}

export default Home