import "./App.css";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        // user가 null이 아니면(로그인한 상태면)
        setIsLoggedIn(true);
        setUserObj(user);
        // auth의 상태가 바뀌면 해당 유저를 userObj객체에 넣어줌
        // 따라서 로그인 한 user를 받게된다.
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const daytime = new Date().getFullYear();
  return (
    <>
      {init ? (
        <AppRouter userObj={userObj} isLoggedIn={isLoggedIn} />
      ) : (
        "initializing"
      )}
      <footer>&copy; twitter {daytime}</footer>
    </>
  );
}

export default App;
