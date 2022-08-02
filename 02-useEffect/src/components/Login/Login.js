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
  const

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
  },[]);

  const {isValid:emailIsValid} = emailState;
  const {isValid:passwordIsValid} = passwordState;
  //우측 객체의 isValid값을 옆의 상수에 할당함

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log("checking");
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    },500);
    return ()=>{
      console.log('cleanup');
      clearTimeout(identifier);
    }; 
  },[emailIsValid,passwordIsValid])
  //emali하고 password의 유효성이 변경될 때마다 form의 유효성 검사 
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
