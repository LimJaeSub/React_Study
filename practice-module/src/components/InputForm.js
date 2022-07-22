import React,{useState} from 'react'

function InputForm(props) {
   
    const [userName,setUserName]=useState("");
    const [userAge,setUserAge]=useState("");
    const [counter,setCounter]=useState(1);


    const ChangeNameHandler=(e)=>{
        setUserName(e.target.value);
    }
    const ChangeAgeHandler=(e)=>{
        setUserAge(e.target.value);
    }
    const SubmitHandler=()=>{

        const newData={
            id:counter,
            name:userName,
            age:userAge,
        }
        props.updateList(newData);
        setCounter(counter+1);
        setUserAge("");
        setUserName("");
    }


  return (
    <div className='inputForm__main'>
        <div className='inputForm__section'>
            <h3>UserName</h3>
            <input type="text" onChange={ChangeNameHandler} placeholder="input user name" value={userName}/>
        </div>
        <div className='inpurForm__section'>
            <h3>Age</h3>
            <input type="number" onChange={ChangeAgeHandler} placeholder="input Age" value={userAge}/>
        </div>
        <button onClick={SubmitHandler}>Button</button>
    </div>
  )
}

export default InputForm