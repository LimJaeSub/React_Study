import classes from './Checkout.module.css';
import {useRef} from 'react';

const isEmpty = (value) => value.trim()===''? true : false;
const isFive = (value) => value.trim().length ===5;
const Checkout = (props) => {

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;


    // @ 입력 값 검증
    const enteredNameIsValid = !isEmpty(enteredName); // 비어있지 않으면 유효
    const enteredStreetIsValid = !isEmpty(enteredStreet); // 비어있지 않으면 유효
    const enteredCityIsValid = !isEmpty(enteredCity); // 비어있지 않으면 유효
    const enteredPostalIsValid = isFive(enteredPostal); 

    const formIsValid = enteredNameIsValid & enteredStreetIsValid & enteredCityIsValid & enteredPostalIsValid;

    if(!formIsValid){
      // 데이터 제출에 오류가 발생한 경우
      return;
    }
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef} />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;