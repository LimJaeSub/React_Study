import React, { useState,useEffect,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer=(state,action)=>{
  if(action.type==='USER_INPUT'){
    return {value:action.val, isValid:action.val.includes('@')}; //action의 type이 USER_INPUT일 경우 value와 isValid의 상태를 업데이트 한다.
  }
  if(action.type==='INPUT_BLUR'){
    return{value:state.value,isValid:state.value.includes('@')};//value에 현재 상태인 state도 사용이 가능
  }
  return {value:'',isValid:false};
}

const passwordReducer=(state,action)=>{
  if(action.type==='USER_INPUT'){
    return {value:action.val, isValid:action.val.includes('@')}; //action의 type이 USER_INPUT일 경우 value와 isValid의 상태를 업데이트 한다.
  }
  if(action.type==='INPUT_BLUR'){
    return{value:state.value,isValid:state.value.includes('@')};//value에 현재 상태인 state도 사용이 가능
  }
  return {value:'',isValid:false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value:'',
    isValid:null,
  });

  const [passwordState,dispatchpassword]=useReducer(passwordReducer,{
    value:'',
    isValid:null,
  });


  useEffect(()=>{
    console.log('Effect Running');
  });

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log("checking");
      setFormIsValid(
        emailState.isValid.includes('@') && enteredPassword.trim().length > 6
        //boolean && boolean
      );
    },500);
    return ()=>{
      console.log('cleanup');
      clearTimeout(identifier);
    }; 
    //cleanup function
    //1.useEffect로 선언한 sideEffect function이 실행될 떄 실행(첫 번째 sideEffect실행은 실행x)
    //2.특정 컴포넌트가 재사용될 때마다 실행
    //클린업 함수에 clearTimeout를 넣어서 클린업함수가 실행될때마다 타이머 지움
    //즉, 새로운 타이머를 설정하기 전에 마지막 타이머를 지움
    //사용자가 타이핑을 멈춘 이후 0.5초 뒤에 sideEffect함수를 실행하는것
    //계속 타이핑 하고있으면 cleanup함수에 의해 타이머가지워짐
  },[enteredEmail,enteredPassword])
  //의존성 배열에 함수의 실행을 추가하지말고 포인터를 추가
  //함수의 실행을 추가하면 함수의 결과값이 의존성에 들어감
  //여기 3개의 의존성의 컴포넌트 렌더링 주기에 변경된 경우만 setFormIsValid를 실행


  //무언가에 대한 응답(sideEffect)으로 실행되는 코드에 useEffect는 굉장한 도움이 됨

  const emailChangeHandler = (event) => {
    dispatchEmail({type:'UESR_INPUT',val:event.target.value});
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchpassword({type:'USER_INPUT',val:event.target.value})

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length>6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchpassword({type:'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
