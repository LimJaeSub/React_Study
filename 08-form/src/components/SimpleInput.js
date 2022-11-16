import {useref,useState} from 'react';

const SimpleInput = (props) => {

    const [enteredName,setEnteredName] = useState('');

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const formsubmitHandler = (event) =>{
        event.preventDefault(); //@ http 요청을 보내지 않음,전송되면 새로고침되면서 리액트 앱이 재평가됨

        console.log(enteredName);
    }
    return (
      <form onSubmit={formsubmitHandler}>
        <div className='form-control'>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' onChange={nameInputChangeHandler}/>
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </form>
    );
  };
  
  export default SimpleInput;