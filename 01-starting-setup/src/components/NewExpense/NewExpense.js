import React,{useState} from 'react'

import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';
function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  const [isEditing,setisEditing]=useState(false);
  const startEditingHandler = ()=>{
    setisEditing(true);
  }
  const stopEditingHandler =()=>{
    setisEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing &&<ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>
  )
}

export default NewExpense