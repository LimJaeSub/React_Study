import {useState} from 'react';

// @ requestConfig라는 객체를 이용(하단의 customhook에서 사용할 정보 담음)
// @ applyData : 데이터 전달 함수 
const useHttp=(requestConfig,applyData)=>{
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

    // @ 데이터 통신을 관여하는 함수
    // @ 데이터를 받아와 get/post 모두 할수 있어야함
    // 동시에 로딩과 오류라는 상태를 관리해야함
  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
            method:requestConfig.method ? requestConfig.method : 'GET',
            headers:requestConfig.headers ? requestConfig.headers : {},
            body:requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            // @ 해당 값이 들어왔는지 ? 들어온값 : 기본값
        }
      );
      // @ fetch(url,optionobject)
      // @ optionobject에는 HTTP 방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body) 

      if (!response.ok) {
        throw new Error('Request failed!');
      }
      // @ 응답 오류 탐지

      const data = await response.json();
      // @ JSON파일을 객체로 변환

      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return {
    isLoading:isLoading,
    error:error,
    sendRequest:sendRequest
  }
  // @ customHook이 반환할 상수 or 함수들
}

export default useHttp;