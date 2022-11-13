import {useState,useEffect} from 'react';

const useCounter = (forwards=true)=>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(forwards){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
        
      }, 1000);

      return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;


// @ 이름 앞에 use를 붙이는 것은 리액트가 이것이 커스텀 훅인지를 인지한다.
