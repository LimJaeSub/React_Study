import {useref,useState} from 'react';

const SimpleInput = (props) => {
    // @ 1. state
    const [enteredName,setEnteredName] = useState('');

    // @ 2. ref
    const nameInputRef = useRef();

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const formsubmitHandler = (event) =>{
        event.preventDefault(); //@ http 요청을 보내지 않음,전송되면 새로고침되면서 리액트 앱이 재평가됨

        if(enteredName.trim()==''){
          return; 
        }
        // enteredName이 공백이면 return을 해버려서 이후 코드를 실행하지 않게함

        

        // @ ref는 current 프로퍼티를 가지며 value도 가짐

        // 실제로는 두가지 방법을 동시에 사용하지 않고 한가지 방법으로만 사용함
        // 폼이 제출되었을때 유효성을 검증하려면 ref
        // 즉각적인 유효성 검증이 필요할땐 state

        setEnteredName(''); // form 초기화
        // nameInput.current.value = '' ; < 이 방법으로도 할 수는 있지만, dom을 직접조작하는 것이기 때문에 지양해야한다.
    }
    return (
      <form onSubmit={formsubmitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Your Name</label>
          <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;