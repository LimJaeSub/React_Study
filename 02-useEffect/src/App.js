import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(()=>{
      const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
      if(storedUserLoggedInInformation==='1'){
      setIsLoggedIn(true);
    }
  },[]); 
  //useEffect는 모든 컴포넌트 내 함수가 실행 된 후 실행(제일마지막)된다.
  //따라서 여기서 state가 업데이트 된 후 컴포넌트 함수를 재실행한다.


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
