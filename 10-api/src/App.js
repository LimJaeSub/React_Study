import "./App.css";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        // user가 null이 아니면(로그인한 상태면)
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const daytime = new Date().getFullYear();
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing"}
      <footer>&copy; twitter {daytime}</footer>
    </>
  );
}

export default App;
