import React from 'react'
import { useParams } from 'react-router-dom'

const List = () => {

    const {id} = useParams();
    // 페이지 라우팅 기법중 Path Variable
    // @ app.js에서의 List path경로에서 :id라고 설정해줬으므로 변수명도 id라 하면됨
    console.log(id);
  return (
    <div>List</div>
  )
}

export default List